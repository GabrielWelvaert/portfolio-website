import { useState } from "react";
import { ButtonSelector } from "./ButtonSelector";

export const Projects = () => {
    const [project, setProject] = useState("");
    return (
        <>
            <div id="projects" className="non-centered-scrollable-section page-content-container-1000">
                <div className="passage-text-header">Projects</div>
                <div className="passage-text">
                    My projects showcase my commitment to continuous learning and my passion for building software. Below, I highlight my two most recent major projects and this website—each created independently, outside of school or work, with no commercial intent. Please use the selector below to view a project:
                </div>
                <ButtonSelector
                    options={["Realm of the Mad Gabe", "TheGabebook", "This Website"]}
                    selected={project}
                    callback={setProject}
                ></ButtonSelector>
                <div>
                    {project || "not shit"}
                </div>
            </div>
        </>
    )
};