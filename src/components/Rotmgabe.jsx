import { BaseCard } from "./BaseCard"

export const Rotmgabe = ({ className, visibleVideo, setProject }) => {
    return (
        <div className={className}>
            <div className="passage-text">
                Realm of the Mad Gabe (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/Realm-of-the-Mad-Gabe" target="_blank" rel="noopener noreferrer">GitHub</a>)
                is a C++ video game that I wrote from scratch without the assistance of a game engine or game engine library. 
                Through this project, I honed my C++ skills and gained hands-on experience with data-oriented design and high-performance computing concepts. 
                I used <a className="hover-image-text" href="https://sourceware.org/gdb/" target="_blank" rel="noopener noreferrer">GDB</a> and <a className="hover-image-text" href="https://valgrind.org/" target="_blank" rel="noopener noreferrer">Valgrind</a> for debugging, and <a className="hover-image-text" href="https://www.libsdl.org/" target="_blank" rel="noopener noreferrer">SDL</a> for hardware interactions. 
                The game is a clone of <a className="hover-image-text" href="https://en.wikipedia.org/wiki/Realm_of_the_Mad_God" target="_blank" rel="noopener noreferrer">Realm of the Mad God</a> utilizing art from <a className="hover-image-text" href="https://www.oryxdesignlab.com/" target="_blank" rel="noopener noreferrer">Oryx Design Lab</a>.
            </div>
            <div className="relative w-full pb-[56.25%]">
                {visibleVideo && (
                <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/aP7Ju_zDels?rel=0" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                ></iframe>
                )}
            </div>
            <div className="passage-text">
                The core of this project is an implementation of the Entity-Component-System (<a className="hover-image-text" href="https://en.wikipedia.org/wiki/Entity_component_system" target="_blank" rel="noopener noreferrer">ECS</a>) architectural pattern.
                In this pattern, the game is composed of <strong>entities</strong> that have <strong>components</strong> with mutable states, which are updated by various <strong>systems</strong>.
                This unique design optimizes CPU memory access, allowing the game to sustain hundreds of frames per second even under high computational load.
                Most professional game engines use ECS.
            </div>
            <div className="grid grid-cols-2 items-center justify-around gap-2">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Entities only have an id:</div>
                    <img className="rounded-image w-[60%]" src="/entity.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Components only hold data:</div>
                    <img className="rounded-image w-[60%]" src="/componentexamples.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, an entity holds no data itself. Instead, their data lives in separate components. Components are stored in their own contiguous memory pools:
            </div>
            <div className="grid grid-cols-[54%_46%] items-center justify-center gap-6">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Pools are wrappers for vectors of components:</div>
                    <img className="rounded-image" src="/pool.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Components have a static id per template instance:</div>
                    <img className="rounded-image" src="/component.png"></img>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="passage-text">Components are templated with structs to create component types:</div>
                <img className="rounded-image w-[50%]" src="/componenttemplateexample.png"></img>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="passage-text">Pools are stored together for easy access:</div>
                <img className="rounded-image w-[60%]" src="/pools.png"></img>
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Here is a visualization of the component pools. Notice how there is a pool for each type of component, and that each cell of a pool holds the component for a given entity.</div>
                    <img className="rounded-image" src="/pools.drawio.png"></img>
                </div>
            </div>
            <div className="passage-text">
                With this pool pattern, entities are decoupled from their components, so all operations on components are performed in the pools. 
                This enables a composition-based approach, in which an entity's behavior is determined by the set of components it holds. 
                We track this using a signature, represented efficiently as a bitset in which each bit indicates the presence or absence of a component. Marking a component as present simply means flipping the bit at the index of the component's s static Id:
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="passage-text">
                    Component signatures are bitsets indexable by component id's:
                </div>
                <img className="rounded-image" src="/signature.png"></img>
                <img className="rounded-image" src="/signatures.png"></img>
            </div>
            <div className="passage-text">
                To exemplify pool access, here is sample code for adding a component to an entity.
                First, the component id is used to find the correct pool. Then, the entity id and component data are passed to the pool, which inserts the component and records the location for later retrieval for this entity. We also update the entity's component signature: 
                <img className="rounded-image" src="/addcomponent.png"></img>
            </div>
            <div className="passage-text">
                For example, here are some basic entities, which have behavior defined by their components:
            </div>
            <div className="grid grid-cols-3 items-start justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text min-h-[200px]">Entities with sprite and position components are visible; with only these, they may be the floor or some decorative object.</div>
                    <img className="w-48 h-48" src="/floor.png"></img>
                    <img className="rounded-image" src="/floorsignature.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text min-h-[200px]">Entities with sprite, position, and hitbox components are visible and interactable; with these and a solidBody component, they may be impassable barriers like trees.</div>
                    <img className="w-48 h-48" src="/tree.png"></img>
                    <img className="rounded-image" src="/treesignature.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text min-h-[200px]">Entities with sprite, position, hitbox, velocity, and damage components are visible, interactable, mobile, and have some damage value; with only these, they're likely projectiles.</div>
                    <img className="w-48 h-48" src="/projectile.png"></img>
                    <img className="rounded-image" src="/projectilesignature.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, even if entities differ conceptually, they may still share a common subset of components.
            </div>
            <div className="passage-text">
                This brings us to the systems part of ECS, which are responsible for updating the data in components. Systems are specialized and isolated, performing specific updates only for a specific group of entities. Each system maintains its own component signature, which serves as a set of requirements for being processed. If an entity's component signature contains all the components in the system's signature, it will be tracked and processed by that system. All systems perform their updates each frame on every entity that they track: 
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        System parent class:
                    </div>
                    <img className="rounded-image" src="/system.png"></img>
                </div>
            </div>    
            <div className="grid grid-cols-[55%_45%] items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        Here is an example of a render system. From our entity examples above, all would be tracked by this system, because they all have the required sprite and position components:
                    </div>
                    <img className="rounded-image" src="/rendersystem.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        Checking if the projectile entity (<img className="inline w-8 h-8" src="/projectile.png"></img>) should be tracked by the render system:
                    </div>
                    <img className="rounded-image" src="/signatureexample1.png"></img>
                    <div className="passage-text">
                        The resulting signature matches the signature of the system, so it will be tracked.
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-[55%_45%] items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        Here is an example of a linear movement system. From our entity examples above, only the projectile entity would be tracked by this system because only it has both the required position and velocity components:
                    </div>
                    <img className="rounded-image" src="/movementsystem.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">
                        Checking if the tree entity (<img className="inline w-8 h-8" src="/tree.png"></img>) should be tracked by the movement system:
                    </div>
                    <img className="rounded-image" src="/signatureexample2.png"></img>
                    <div className="passage-text">
                        The resulting signature does not match the signature of the system, so it will not be tracked.
                    </div>
                </div>
            </div> 
            <div className="passage-text">
                Systems that do not share any of the same component requirements can often naturally run in parallel.
            </div>
            <div className="passage-text">
                So, now we have entities, with their components in contiguous pools, that are modified by specialized systems. What are the advantages with this design? Why is this code so performant? 
                For this ECS implementation, the primary reason is <span className="font-bold">cache efficiency</span>:
            </div>
            <div className="passage-text">
                Contiguous component pools provide spatial and temporal locality during system updates. When a system reads a component for an entity, it actually loads an entire cache line (usually 64 bytes) of contiguous data from RAM into the CPU cache. Given that systems update all of their entities each frame, fetching components often results in cache hits because that data has already been loaded into the CPU cache, which is orders of magnitude faster than getting the data from RAM in the case of a cache miss.
            </div>
            <div className="passage-text">
                With this in mind, components are designed to be as small as possible. Smaller components mean more of them fit into a single cache line, maximizing the amount of useful data loaded into the CPU cache at once. Additionally, components are structured around system access patterns—ideally, to reduce cache misses, all the data in a component will be needed whenever it is loaded from memory. To illustrate this, I'll show how a player-statistics component would be designed in an object-oriented approach and contrast it with a data-oriented approach:
            </div>
            <div className="grid grid-cols-2 items-start justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold">Object-Oriented Design:</div>
                    <div className="passage-text">In Object-Oriented Design, we organize and add data fields to classes to represent real world objects or concepts that are intuitive for humans:</div>
                    <img className="rounded-image" src="/OOPstats.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold">Data-Oriented Design:</div>
                    <div className="passage-text">In Data-Oriented Design, we organize and add data fields to structs based on the temporal and spatial locality of the fields, and keep size as low as possible:</div>
                    <img className="rounded-image" src="/DODstats.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, the data-oriented approach favors breaking large structs into smaller, focused ones. This isn't a criticism of object-oriented programming, but rather an observation that data-oriented design offers better performance in the context of ECS.
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="passage-text">Additionally, to minimize cache misses, pools are kept dense by filling memory holes when entities die. Here is an example of filling the hole left by the death of entity 1 in a pool of health components:</div>
                <img className="rounded-image w-[50%]" src="/memoryhole.drawio.png"></img>
            </div>
            <div className="passage-text">
                Essential operations like this and others including the management of entities, pools, and systems are the responsibility of the ECS "Manager" class which 
                I've omitted to keep explanations concise and centered on the essential underlying mechanisms.
            </div>
            <div className="passage-text">
                The ECS implementation that we have just explored uses an array-of-structures (AoS) layout, which works well when entire components access is needed. Many ECS implementations favor a struct-of-arrays (SoA) layout, which enables auto-vectorization for operations on individual fields. Choosing between AoS and SoA is a trade-off between flexibility, ease of use, and memory access patterns, and actual results will be hardware-dependent.
                Here is a useful visualization the memory layout for each for a component with 3 fields:
            </div>
            <div className="grid grid-cols-2 items-start justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold">AoS:</div>
                    <div className="passage-text">Code representation:</div>
                    <img className="rounded-image" src="/aos.png"></img>
                    <div className="passage-text">Components are adjacent in memory:</div>
                    <img className="rounded-image" src="/aos.drawio.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text font-bold">SoA:</div>
                    <div className="passage-text">Code representation:</div>
                    <img className="rounded-image mb-1" src="/soa.png"></img>
                    <div className="passage-text">Fields are adjacent in memory:</div>
                    <img className="rounded-image" src="/soa.drawio.png"></img>
                </div>
            </div>
            <div className="passage-text">
                This project was a rewarding mix of challenge, fun, and learning. 
                I enjoy C++ programming and working on projects that directly involve data structures, memory representation, and algorithm design. 
            </div>
            <div className="passage-text">
                <a href="#projects" className="interactable-text focus:outline-none cursor-pointer" onClick={() => setTimeout(() => setProject("TheGabebook"), 1250)}>
                    Click To View Next Project
                </a>    
            </div>
        </div>
    )
}