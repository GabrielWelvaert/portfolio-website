import { useState, useEffect } from "react";
import { Rotmgabe } from "./Rotmgabe";
import { Gabebook } from "./Gabebook";
import { Fade } from "./Fade"
import { ProjectCard } from "./ProjectCard";
import { Icon } from "./Icon";
import { githubSVGDark } from "../utils";


export const Projects = (theme) => {
    
    return (
        <div id="projects" className="flex-col ml-6 mr-6 gap-6">
            <div className="text-4xl font-bold mb-2">Projects</div>    
            <div id="project-card-container" className="flex flex-row flex-wrap gap-4">
                <ProjectCard 
                    title="C++ Video Game" 
                    description="Implemented a custom Entity-Component-System (ECS) architecture with contiguous memory pools and data-oriented design for cache-efficient CPU execution."
                    tags={["C++23","ECS","Valgrind", "GCC", "SDL2","DOD","OOP","CPU caching"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Node.js Social Site" 
                    description="test description"
                    tags={["1","2","3"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Portfolio Website" 
                    description="test description"
                    tags={["1","2","3"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Recipe Encylopedia" 
                    description="test description"
                    tags={["1","2","3"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
            </div>
        </div>
    )
};