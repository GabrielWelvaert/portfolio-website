import { useState, useEffect } from "react";
import { ButtonSelector } from "./ButtonSelector";
import { Rotmgabe } from "./Rotmgabe";
import { Gabebook } from "./Gabebook";
import { Thiswebsite } from "./Thiswebsite";

export const Projects = () => {
    const projects = ["Realm of the Mad Gabe", "TheGabebook", "This Website"];
    const [project, setProject] = useState("");
    console.log(project);
    return (
        <>
            <div id="projects" className="non-centered-scrollable-section page-content-container-1000">
                <div className="passage-text-header">Projects</div>
                <div className="passage-text">
                    My projects showcase my commitment to continuous learning and my passion for building software. Below, I highlight my two most recent major projects and this website. Each was created independently, outside of school or work, with no commercial intent. Please use the selector below to view a project:
                </div>
                <ButtonSelector
                    options={projects}
                    selected={project}
                    callback={setProject}
                ></ButtonSelector>
                {project !== "" && (
                    <div className={`relative min-w-[100%]`}>
                        <div className="invisible"> {/*invisible div used for height calculations because real project elements are absolute, so aren't growing height of parent*/}
                            {project === projects[0] && <Rotmgabe className={`opacity-fading-project-non-absolute ${project === projects[0] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} visibleVideo={project === projects[0] } setProject={setProject}></Rotmgabe>}
                            {project === projects[1] && <Gabebook className={`opacity-fading-project-non-absolute ${project === projects[1] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Gabebook>}
                            {project === projects[2] && <Thiswebsite className={`opacity-fading-project-non-absolute ${project === projects[2] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Thiswebsite>}
                        </div>
                        <Rotmgabe className={`opacity-fading-project ${project === projects[0] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} visibleVideo={project === projects[0]} setProject={setProject}></Rotmgabe>
                        <Gabebook className={`opacity-fading-project ${project === projects[1] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Gabebook>
                        <Thiswebsite className={`opacity-fading-project ${project === projects[2] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Thiswebsite>
                    </div>
                )}
            </div>
        </>
    )
};