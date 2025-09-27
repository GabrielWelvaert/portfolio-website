import {useEffect} from "react";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {

    return (<>
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out gap-5
                        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}>
            <button onClick={() => setMenuOpen(false)} className="absolute top-18 right-6 interactable-text text-5xl focus:outline-none cursor-pointer">
                &times;
            </button>
            <a href="#about" className="interactable-text text-3xl" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" className="interactable-text text-3xl" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#projects" className="interactable-text text-3xl" onClick={() => setMenuOpen(false)}>Projects</a>
        </div>
    </>)
};