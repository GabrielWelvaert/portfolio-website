import { useState } from "react";
import { ButtonSelector } from "./ButtonSelector";
import { Rotmgabe } from "./Rotmgabe";
import { Gabebook } from "./Gabebook";
import { Thiswebsite } from "./Thiswebsite";

export const Projects = () => {
    const [project, setProject] = useState("");
    const projects = ["Realm of the Mad Gabe", "TheGabebook", "This Website"];

    return (
        <>
            <div id="projects" className="non-centered-scrollable-section page-content-container-1000">
                <div className="passage-text-header">Projects</div>
                <div className="passage-text">
                    My projects showcase my commitment to continuous learning and my passion for building software. Below, I highlight my two most recent major projects and this website—each created independently, outside of school or work, with no commercial intent. Please use the selector below to view a project:
                </div>
                <ButtonSelector
                    options={projects}
                    selected={project}
                    callback={setProject}
                ></ButtonSelector>
                <div className="relative min-w-[100%]">
                    <Rotmgabe className={`opacity-fading-project ${project === projects[0] ? "opacity-100" : "opacity-0"}`}></Rotmgabe>
                    <Gabebook className={`opacity-fading-project ${project === projects[1] ? "opacity-100" : "opacity-0"}`}></Gabebook>
                    <Thiswebsite className={`opacity-fading-project ${project === projects[2] ? "opacity-100" : "opacity-0"}`}></Thiswebsite>
                </div>
            </div>
        </>
    )
};