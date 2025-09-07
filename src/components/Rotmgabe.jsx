
export const Rotmgabe = ({ className, visible }) => {
    console.log(visible)
    return (
        <div className={className}>
            <div className="passage-text">
                Realm of the Mad Gabe (<a className="hover-image-text" href="https://github.com/GabrielWelvaert/Realm-of-the-Mad-Gabe" target="_blank" rel="noopener noreferrer">GitHub</a>)
                is a C++ video game that I wrote without the assistance of a game engine or game engine library. This project allowed me to sharpen my C++ skills while leveraging data-oriented design, focusing on concepts like cache friendliness and vectorization.
                Debugging was done with <a className="hover-image-text" href="https://sourceware.org/gdb/" target="_blank" rel="noopener noreferrer">GDB</a> and <a className="hover-image-text" href="https://valgrind.org/" target="_blank" rel="noopener noreferrer">Valgrind</a> while <a className="hover-image-text" href="https://www.libsdl.org/" target="_blank" rel="noopener noreferrer">SDL</a> handled all hardware interactions.
            </div>
            <div class="relative w-full pb-[56.25%] my-[calc(var(--spacing)*8)] bg-amber-300">
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
                Talk about ECS engine!! go into detail this is the main stuffalk about ECS engine!! go into detail this is the main stuffalk about ECS engine!! go into detail this is the main stuffalk about ECS engine!! go into detail this is the main stuffalk about ECS engine!! go into detail this is the main stuffalk about ECS engine!! go into detail this is the main stuff
            </div>
            <div className="passage-text">
                Other stuff, eventbus and assetstore
            </div>
        </div>
    )
}