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
                    description="Custom Entity-Component-System (ECS) architecture with contiguous pools & data-oriented design for cache-efficient execution."
                    tags={["C++23","Valgrind", "ECS","DOD","OOP","CPU caching","SDL2"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Node.js Social Site" 
                    description="test description"
                    tags={["Node.js","Express","JavaScript","HTML/CSS","MySQL","REST APIs","WebSockets","MVC"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Portfolio Website" 
                    description="test description"
                    tags={["React","Tailwind","Vite","GitHub Actions","AWS","S3","CloudFront","Route 53"]}
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