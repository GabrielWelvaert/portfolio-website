
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
                The core of this of this project is the implementation of an Entity-Component-System (<a className="hover-image-text" href="https://en.wikipedia.org/wiki/Entity_component_system" target="_blank" rel="noopener noreferrer">ECS</a>) architectural pattern.
                In this pattern, the game is composed of <strong>entities</strong> that have <strong>components</strong> with mutable states, which are updated by various <strong>systems</strong>.
                This design optimizes CPU memory access patterns, allowing the game to sustain hundreds of frames per second even under high computational load.
            </div>
            <div className="passage-text">
                DO NOT DO COUNTEREXAMPLE. its too much and is disingenuous, there are so many OOP approaches. I cant just pick one and use it as a counter example. its too complex.
                just focus on ECS. 
                1) next, show how the relationship between entities and components
                2) then, show the relationship between entities and systems
                3) then talk about why its so efficient! yay! mvoe on w/ ur life
            </div>
        </div>
    )
}