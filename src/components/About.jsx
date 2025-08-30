import { ColumnCard } from "./ColumnCard";
import { ButtonCard } from "./ButtonCard";

export const About = () => {
    return (
        <>
            <div id="about" className="page-content-container-centered-1000">
                <div className="passage-text-header">About</div>
                <div className="passage-text">
                    Early career full-stack software engineer passionate about writing scalable, maintainable, and performant code. Eager to learn, contribute to interesting projects, and make a positive impact.
                </div>
                <div className="cards-row">
                    <ColumnCard
                        title="Preferred Languages"
                        description={[
                            "Python for scripting, automation, data analysis",
                            "C++ for performance and control",
                            "Javascript and its frameworks for the web",
                        ]}
                    />
                    <ColumnCard
                        title="Education"
                        description={[
                            "Computer Science, B.A. – University of Virginia (2023)"
                        ]}
                    />
                    <ButtonCard
                        title="Skills"
                        description={[
                            "C++", "Javascript", "Python", "PHP",
                            "HTML", "CSS", "Node/Express", "React", "Tailwind", "REST",
                            "MVC", "Docker", "MySQL", "OOP", "DoD",
                            "Git", "GitHub", "Confluence", "Jira", "Agile",
                            "VSCode", "Valgrind", "GDB", "GCC", "Fortify", "AWS",
                            "Linux", "Windows", "OOP", "GIMP", "SDL2"
                        ]}
                    />
                </div>
                <div className="passage-text">
                    Currently living in Southeastern Virginia.
                </div>
                <div className="passage-text">
                    I also enjoy cooking, the outdoors, travel, and fostering kittens.
                </div>
            </div>
        </>
    )
};