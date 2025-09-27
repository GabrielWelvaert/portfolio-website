import { useState, useEffect } from "react";
import { ButtonSelector } from "./ButtonSelector";
import { Rotmgabe } from "./Rotmgabe";
import { Gabebook } from "./Gabebook";
import { Thiswebsite } from "./Thiswebsite";
import { Fade } from "./Fade"

export const Projects = () => {
    const projects = ["Realm of the Mad Gabe", "TheGabebook", "This Website"];
    const [project, setProject] = useState("");
    
    return (
        <div id="projects" className="non-centered-scrollable-section page-content-container-1000">
            <div className="passage-text-header">Projects</div>
            {/* <div className="passage-text">
                Below are my two most recent projects and this website, all created independently from school or work.
            </div> */}
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
                    <Fade show={project === projects[0]}>
                        <Rotmgabe className={`opacity-fading-project ${project === projects[0] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} visibleVideo={project === projects[0]} setProject={setProject}></Rotmgabe>
                    </Fade>
                    <Fade show={project === projects[1]}>
                        <Gabebook className={`opacity-fading-project ${project === projects[1] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Gabebook>
                    </Fade>
                    <Fade show={project === projects[2]}>
                        <Thiswebsite className={`opacity-fading-project ${project === projects[2] ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}></Thiswebsite>
                    </Fade>
                </div>
            )}
        </div>
    )
};