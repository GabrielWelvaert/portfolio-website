#include <iostream>
#include <array>
#include <vector>
#include <unordered_map>
#include <memory>
#include "D:\laboratory\c++\Realm-of-the-Mad-Gabe\libs\glm\glm.hpp"
#include <bitset>

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

struct IComponent { 
protected: 
    static int nextId; 
};

int IComponent::nextId = 0;

template <typename T> 
class Component: public IComponent {
public:
    // Returns a unique id per component type.
    // local static 'id' is initialized only once,
    // on first call to GetId() for that component type.
    static int GetId() { 
        static int id = nextId++; 
        return id; 
    }
};

class IPool {
public:
    virtual ~IPool() = default;
    virtual void RemoveEntityFromPool(int entityId) = 0;
};

template <typename T>
class Pool: public IPool {
private:
    std::vector<T> data; 
    unsigned int size;
    std::unordered_map<int,int> entityIdToIndex;
    std::unordered_map<int,int> indexToEntityId;
public:
    virtual ~Pool() = default;
    template <typename... TArgs> void Set(int entityId, TArgs&&... args){}
    void Remove(int entityId){} 
};

// can be indexed by component's static id
std::vector<std::shared_ptr<IPool>> componentPools;

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
    float maxHealth;
    float activeHealth;
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
            auto& positionComponent = GetComponent<PositionComponent>(entity);
            auto& velocityComponent = GetComponent<VelocityComponent>(entity);
            positionComponent.position.x += (velocityComponent.velocity.x * deltaTime);
            positionComponent.position.y += (velocityComponent.velocity.y * deltaTime);
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
            // logic for rendering each entity
        }
    }
};
