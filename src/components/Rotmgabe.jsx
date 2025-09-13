
export const Rotmgabe = ({ className, visible }) => {
    return (
        <div className={className}>
            <div className="passage-text">
                Realm of the Mad Gabe (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/Realm-of-the-Mad-Gabe" target="_blank" rel="noopener noreferrer">GitHub</a>)
                is a C++ video game that I wrote without the assistance of a game engine or game engine library. This project allowed me to sharpen my C++ skills while learning data-oriented design, focusing on concepts like cache friendliness and vectorization.
                Debugging was done with <a className="hover-image-text" href="https://sourceware.org/gdb/" target="_blank" rel="noopener noreferrer">GDB</a> and <a className="hover-image-text" href="https://valgrind.org/" target="_blank" rel="noopener noreferrer">Valgrind</a> while <a className="hover-image-text" href="https://www.libsdl.org/" target="_blank" rel="noopener noreferrer">SDL</a> handled all hardware interactions.
            </div>
            <div className="relative w-full pb-[56.25%]">
                {visible && (
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
                This unqiue design optimizes CPU memory access, allowing the game to sustain hundreds of frames per second even under high computational load.
                Most professional game engines use ECS.
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Entities only have an id</div>
                    <img className="rounded-image" src="/entity.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Components hold pure data for an entity; no functionality</div>
                    <img className="rounded-image" src="/component.png"></img>
                </div>
            </div>
            <div className="passage-text">
                As you can see, an entity holds no data itself. Instead, its data lives in separate components, which themselves are stored in contiguous memory pools:
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Pools are created per component type, where each cell holds a component for an entity</div>
                    <img className="rounded-image" src="/pool.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Pools are stored together for easy access</div>
                    <img className="rounded-image" src="/pools.png"></img>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Here is a visualization of the component pools. Notice how there is a pool for each type of component, and that each cell of a pool holds the component for a given entitiy.</div>
                    <img className="rounded-image" src="/pools.drawio.png"></img>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-22">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text">Modifying an entity's data means updating the pool of a corresponding component. Behavior is composition-driven, so an entity's behavior will depend on the set of components it holds. We track this with a signature, efficiently represented as a bitset. Representing the presence of a component in the signature simply means flipping the bit at the index of the component's static Id.</div>
                    <img className="rounded-image" src="/signature.png"></img>
                    <img className="rounded-image" src="/signatures.png"></img>
                    <img className="rounded-image" src="/addcomponent.png"></img>
                </div>
            </div>
            <div className="passage-text">
                For example, here are some basic entities, which have behavior defined by their component signature:
            </div>
            <div className="grid grid-cols-3 items-center justify-center gap-12">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text min-h-[200px]">Entities with sprite and position components are visible; with only these, they may be the floor or some decorative object.</div>
                    <img className="w-48 h-48" src="/floor.png"></img>
                    <img className="rounded-image" src="/floorsignature.png"></img>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <div className="passage-text min-h-[200px]">Entities with sprite, position, and hitbox components are visible and interactable; with these and a solidBody component, they may be impassable barriers.</div>
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
                This brings us to the systems part of ECS, which are responsible for updating the data in the components of entities. Systems are specialized and isolated, performing specific updates only for a specific group of entities. Each system maintains its own component signature, which serves as a set of requirements for being processed— If an entity's component signature contains all the components in the system's signature, it will be tracked and processed. All systems perform their updates on every entity that they track for each frame: 
            </div>
            <div className="passage-text">
                System architecture code goes here.
            </div>
            <div className="passage-text">
                Example systems here. Render system, linear movement system. use above entities as example. then can finally talk abt cache locality, vectorization, data oritented design (structs contain data based on access)
            </div>
            <div className="passage-text">
                also, mention separation of concerns of systems allows for potential for paralellization even tho I didnt do this
            </div>
            <div className="flex flex-row items-center justify-center gap-12">
                <div className="passage-text">
                    In Data-Oriented Design, we organize and add data fields to structs based on the temporal and spatial locality of the fields, and keep size as low as possible.
                </div>
                <div className="passage-text">
                    In Object-Oriented Design, we organize and add data fields to classes to represent real world objects or concepts that are intuitive for humans
                </div>
                <strong>great example opportunity: player stat as one class for OO, and separated out for DOd</strong>
            </div>
            <div className="flex flex-col items-center justify-center gap-1">
                <div className="passage-text">
                    also, mention separation of concerns of systems allows for potential for paralellization even tho I didnt do this
                </div>
            </div>
            <div className="passage-text">
                Brief info about stuff I abstracted away: eventBus, Registry, managing event ids.
            </div>
            <div className="passage-text">
                give credit to pikuma, and credit to who he cited. "Credit: I was introduced to ECS from an online lecture series by Gustavo X, which was based off an academic paper published by Professor Y."
                The art in this project was created by Oryx Design Labs and licensed for its use.”
            </div>
            <div className="passage-text">
                mockups here, maybe. I don't know if they're interesting enough to show
            </div>
            <div className="passage-text">
                todo simplify pool.png. indexToEntityId is never even used in rotmgabe lol so remove it. show definition for add remove maybe
                include ~Pool destructor.
            </div>
        </div>
    )
}