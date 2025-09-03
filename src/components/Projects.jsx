import { useState } from "react";
import { ButtonSelector } from "./ButtonSelector";
import { Rotmgabe } from "./Rotmgabe";
import { Gabebook } from "./Gabebook";
import { Thiswebsite } from "./Thiswebsite";

export const Projects = () => {
    const [project, setProject] = useState("");
    const projects = ["Realm of the Mad Gabe", "TheGabebook", "This Website"];
    let content;
    if(project === projects[0]){
        content = <Rotmgabe></Rotmgabe>
    } else if(project === projects[1]){
        content = <Gabebook></Gabebook>
    } else if(project === projects[2]){
        content = <Thiswebsite></Thiswebsite>
    }

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
                <div>
                    {content}
                </div>
            </div>
        </>
    )
};