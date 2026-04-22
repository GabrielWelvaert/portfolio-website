import { useState, useEffect } from "react";
import { MobileMenu } from './MobileMenu'
import { Icon } from "./Icon";

export const Header = ({menuOpen, setMenuOpen, theme, setTheme }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (<>
        <nav className="fixed top-0  w-full z-40 shadow-lg" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
            <div className="max-w-[1170px] mx-auto px-4 ">
                <div className="flex justify-between items-center h-16">
                    <div className="flex gap-6">
                        <Icon 
                            theme={theme} 
                            onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
                            darkPath = "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
                            lightPath = "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
                        />
                        <a href="#about" className="interactable-text text-2xl select-none">Gabriel Welvaert</a>
                    </div>
                    <div className="w-7 relative z-40 md:hidden interactable-text text-2xl focus:outline-none cursor-pointer" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;  
                    </div>
                    <div className="hidden md:flex items-center space-x-5">
                        <a href="#about" className="interactable-text text-[20px] select-none">About</a>
                        <a href="#work" className="interactable-text text-[20px] select-none">Work</a>
                        <a href="#projects" className="interactable-text text-[20px] select-none">Projects</a>
                    </div>
                </div>
            </div>
        </nav>
    </>); 
}