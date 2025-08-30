import { useState, useEffect } from "react";
import { MobileMenu } from './MobileMenu'

export const NavigationBar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (<>
        <nav className="fixed top-0  w-full z-40 bg-[rgba(10,10,10,.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="interactable-text text-2xl">Gabriel Welvaert</a>
                    <div className="w-7 relative z-40 md:hidden interactable-text text-2xl focus:outline-none cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776; 
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="#about" className="interactable-text text-text-[1.8rem]">About</a>
                        <a href="#work" className="interactable-text text-text-[1.8rem]">Work</a>
                        <a href="#projects" className="interactable-text text-text-[1.8rem]">Projects</a>
                        <a href="#contact" className="interactable-text text-text-[1.8rem]">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </>); 
}