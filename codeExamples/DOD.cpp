#include <iostream>
#include <array>
#include <vector>
#include <unordered_map>
#include <memory>
#include "D:\laboratory\c++\Realm-of-the-Mad-Gabe\libs\glm\glm.hpp"

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

struct IComponent{};

template <typename T>
class Component {

};

struct IComponent { 
protected: 
    static unsigned int nextId; 
};

unsigned int IComponent::nextId = 0;

template <typename T> 
class Component: public IComponent {
public:
    static int GetId() { 
        static unsigned int id = nextId++; 
        return id;
        // unique id per instance type
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
    // CRUD logic here
};

// can be indexed by component's static id
std::vector<std::shared_ptr<IPool>> componentPools;

template <typename TComponent, typename ...TArgs>
void AddComponent(Entity entity, TArgs&& ...args){
    const auto componentId = Component<TComponent>::GetId();
    const auto entityId = entity.GetId();
    // omitting logic for resizing componentPools, if the number of pools is at capacity
    // omitting logic for adding a new pool if this TComponent has not been seen yet
    // forward parameters to component constructor via Tcomponent
    TComponent newComponent(std::forward<TArgs>(args)...);
    std::shared_ptr<Pool<TComponent>> componentPool = std::static_pointer_cast<Pool<TComponent>>(componentPools[componentId]);
    // forward parameters to component constructor via Tcomponent
    TComponent newComponent(std::forward<TArgs>(args)...);
    // add the component to the pool
    componentPool->Set(entityId, newComponent);
    //update component signature for this entity
    entityComponentSignatures[entityId].set(componentId);
}