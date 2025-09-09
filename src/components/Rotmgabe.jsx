
export const Rotmgabe = ({ className, visible }) => {
    return (
        <div className={className}>
            <div className="passage-text">
                Realm of the Mad Gabe (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/Realm-of-the-Mad-Gabe" target="_blank" rel="noopener noreferrer">GitHub</a>)
                is a C++ video game that I wrote without the assistance of a game engine or game engine library. This project allowed me to sharpen my C++ skills while learning data-oriented design, focusing on concepts like cache friendliness and vectorization.
                Debugging was done with <a className="hover-image-text" href="https://sourceware.org/gdb/" target="_blank" rel="noopener noreferrer">GDB</a> and <a className="hover-image-text" href="https://valgrind.org/" target="_blank" rel="noopener noreferrer">Valgrind</a> while <a className="hover-image-text" href="https://www.libsdl.org/" target="_blank" rel="noopener noreferrer">SDL</a> handled all hardware interactions.
            </div>
            <div class="relative w-full pb-[56.25%]">
                {visible && (
                <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/aP7Ju_zDels?rel=0" 
                    title="YouTube video player" 
                    frameborder="0" 
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
                    <div className="passage-text">Therefore, modifying the data for an entity means modifying the pools for the component that holds that data. Here is a code example of adding a component to an entity:</div>
                    <img className="rounded-image" src="/addcomponent.png"></img>
                </div>
            </div>
            <div className="passage-text">
                need to get into systems so we can start talking about cache locality, vectorization, data oritented design (structs contain data based on access)
            </div>
            <div className="passage-text">
                also, mention separation of concerns of systems allows for potential for paralellization even tho I didnt do this
            </div>
            <div className="passage-text">
                give credit to pikuma, and credit to who he cited. "Credit: I learned this design pattern from an online lecture series by Gustavo X, which was based off an academic paper published by Professor Y."
            </div>
        </div>
    )
}