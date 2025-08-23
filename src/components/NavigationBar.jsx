import { useState, useEffect } from "react";

export const NavigationBar = () => {
    
    
    return (<>
        <nav className="fixed top-0  w-full z-40 bg-[rgba(10,10,10,.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl text-white">Gabriel.Welvaert</a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">

                    </div>
                </div>
            </div>
        </nav>
    </>); 
}