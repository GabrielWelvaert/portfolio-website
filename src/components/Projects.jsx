import { useState, useEffect } from "react";
import { ProjectCard } from "./ProjectCard";
import { Icon } from "./Icon";
import { githubSVGDark } from "../utils";


export const Projects = (theme) => {
    
    return (
        <div id="projects" className="flex-col m-3 pl-2 pr-2 pb-2 gap-6 scroll-mt-[64px]">
            <div className="text-4xl font-bold mb-2">Projects</div>    
            <div id="project-card-container" className="flex flex-row flex-wrap gap-4">
                <ProjectCard 
                    title="C++ Video Game" 
                    description="Custom Entity-Component-System (ECS) architecture with contiguous pools & data-oriented design for cache-efficient execution. No game enigne used."
                    tags={["C++23","Valgrind", "ECS","DOD","OOP","CPU caching","SDL2"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert/Realm-of-the-Mad-Gabe"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Node.js Social Site" 
                    description="MVC architecture, RESTful APIs, real-time messaging via Socket.IO, session-based authentication, and custom middleware, deployed on AWS."
                    tags={["Node.js","Express","HTML/CSS","MySQL","REST APIs","WebSockets","MVC"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert/TheGabebook"}
                        darkPath = {githubSVGDark}
                    />}
                />
                <ProjectCard 
                    title="Portfolio Website" 
                    description="React SPA with Tailwind, deployed via S3/CloudFront with CI/CD using GitHub Actions. You're viewing this currently."
                    tags={["React","Tailwind","Vite","AWS","S3","GitHub Actions","CloudFront","Route 53"]}
                    Icon={<Icon 
                        theme={theme} 
                        href={"https://github.com/GabrielWelvaert/portfolio-website"}
                        darkPath = {githubSVGDark}
                    />}
                />
            </div>
        </div>
    )
};