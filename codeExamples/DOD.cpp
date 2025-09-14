#include <iostream>
#include <array>
#include <vector>
#include <unordered_map>
#include <memory>
#include "D:\laboratory\c++\Realm-of-the-Mad-Gabe\libs\glm\glm.hpp"
#include <bitset>
#include <cstdint>


template <typename T>
struct Component{};

// registry manages memory pools 
class Registry{
    
};

class Entity {
private:
    int id;
public:
    int GetId(){
        return id;
    }
};

class IComponent { 
protected: 
    static int nextId; 
};

int IComponent::nextId = 0;

template <typename T> 
class Component: public IComponent {
public:
    static int GetId() { 
        static int id = nextId++; 
        return id; 
    }
};

class IPool {
public:
    virtual ~IPool() = default;
    virtual void Remove(int entityId) = 0;
};

template <typename T>
class Pool: public IPool {
private:
    std::vector<T> data; 
    unsigned int size; // actual count of "live" components
    std::unordered_map<int,int> entityIdToIndex;
    std::unordered_map<int,int> indexToEntityId;
public:
    virtual ~Pool() = default;
    // adding a component to the pool
    template <typename... TArgs>
    void Set(int entityId, TArgs&&... args) {}
    // removing a component from the pool
    void Remove(int entityId) override {} 
};

std::vector<std::shared_ptr<IPool>> componentPools;

Component<HealthComponent> example;

template <typename TComponent, typename ...TArgs>
void AddComponent(Entity entity, TArgs&& ...args){
    const auto componentId = Component<TComponent>::GetId();
    const auto entityId = entity.GetId();
    // logic here for growing componentPools if we need to make a new pool and there isn't room
    // logic here for adding a new pool if this TComponent has not been seen yet, so no pool has been created for it
    std::shared_ptr<Pool<TComponent>> componentPool = std::static_pointer_cast<Pool<TComponent>>(componentPools[componentId]);
    // add the component to the pool, update entityIdToIndex and indexToEntityId
    componentPool->Set(entityId, std::forward<TArgs>(args)...);
    // update component signature for this entity (resize logic hidden for this demo)
    entityComponentSignatures[entityId].set(componentId);
}
template <typename TComponent>
TComponent GetComponent(Entity entity){

}

#define MAX_COMPONENTS 128


typedef std::bitset<MAX_COMPONENTS> Signature;

std::vector<Signature> entityComponentSignatures;

int x,y,z;

std::bitset<8> floor    {00000011}    ;
std::bitset<8> tree     {00001111}    ;
std::bitset<8> tree     {00110111}    ;


class System {
private:
    Signature ComponentSignature;
    std::vector<Entity> entities; 
public:
    // add entity to entities vector
    void AddEntityToSystem(Entity entity){}
    // remove entity from entities vector
    void RemoveEntityFromSystem(Entity entity){}
    // get entities in entities vector
    std::vector<Entity>& GetSystemEntities(){} 
    // get const ref to system's component signature
    const Signature& GetComponentSignature() const {}
    // update this system's component signature
    template <typename TComponent> void RequireComponent(){}
};

struct HealthComponent {
    double maxHealth;
    int activeHealth;
};

struct PositionComponent {
    glm::vec2 position;
};

struct VelocityComponent {
    glm::vec2 velocity;
};

struct SpriteComponent {

};

// for linear movement
class MovementSystem: public System {
public:
    MovementSystem() {
        // on construction build the system's component signature
        RequireComponent<PositionComponent>();
        RequireComponent<VelocityComponent>();
    }

    void Update(double deltaTime){
        // process all entities tracked by this system
        for(auto& entity: GetSystemEntities()){
            auto& posComponent = GetComponent<PositionComponent>(entity);
            auto& velComponent = GetComponent<VelocityComponent>(entity);
            posComponent.position.x += (velComponent.velocity.x * deltaTime);
            posComponent.position.y += (velComponent.velocity.y * deltaTime);
        }
    }
};

// for rendering 
class RenderSystem: public System {
public:
    RenderSystem() {
        // on construction build the system's component signature
        RequireComponent<PositionComponent>();
        RequireComponent<SpriteComponent>();
    }

    void Update(){
        // process all entities tracked by this system
        for(auto& entity: GetSystemEntities()){
            auto& posComponent = GetComponent<PositionComponent>(entity);
            auto& spriteComponent = GetComponent<SpriteComponent>(entity);
            // logic for rendering each entity
        }
    }
};

void ProcessInput(){}
void Update(){}
void Render(){}
bool isRunning;
int main(){
    // 3 things happen per frame:
    while(isRunning){ 
        ProcessInput(); // capture user input
        Update(); // call all non-rendering systems' update functions
        Render(); // call all rendering systems' update functions
    }    
}

// bundled together to represent a human friendly concept
class PlayerStats {
public:
    double HP; // health points
    double MP; // magic points
    int maxHP; // maximum possible health points
    int maxMP; // maxiumum possible magic points
    int defense; // reduces damage taken
    int wisdom; // rate of magic points restoration
    int vitality; // rate of health points restoration
    int speed; // used in velocity calculations
    int dexterity; // rate of fire
    int attack; // damage modifier for attacking
};

// used in systems related to health (ie taking damage)
struct HealthStatComponent {
    float HP; // health points
    uint16_t maxHP; // maximum possible health points
    uint8_t defense; // reduces damage taken
    uint8_t vitality; // rate of health points restoration
};

// used in systems related to magic (ie using abilities)
struct MagicStatComponent {
    float MP; // magic points
    uint16_t maxMP; // maxiumum possible magic points
    uint8_t wisdom; // rate of magic points restoration
};

// used in systems related to attacking
struct OffensiveStatComponent {
    uint8_t dexterity; // rate of fire
    uint8_t attack; // damage modifier for attacking
};

// used in systemd related to moving
struct SpeedStatComponent {
    uint8_t speed; // used in velocity calculations
};

