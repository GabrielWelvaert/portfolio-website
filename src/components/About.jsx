import { ColumnCard } from "./ColumnCard";
import { ButtonCard } from "./ButtonCard";
import { HoverImage } from "./HoverImage";

export const About = () => {
    return (
        <div id="about" className="page-content-container-centered-1000">
            <div className="passage-text-header">Gabriel Welvaert</div>
            <div className="passage-text">
                Full-Stack Software Engineer
            </div>
            <div className="flex flex-row gap-8">
                <a className="hover-image-text" href="mailto:gabewelvaert@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> 
                <a className="hover-image-text" href="http://www.linkedin.com/in/gabriel-welvaert-509444284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="hover-image-text" href="https://github.com/GabrielWelvaert" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="hover-image-text" href="/test.pdf" download>Resume</a>
            </div>
            <div className="cards-row">
                <ColumnCard
                    title="Preferred Languages"
                    className="card-item"
                    description={[
                        "Python for scripting, automation, data analysis",
                        "C++ for performance and control",
                        "Javascript and its frameworks for the web",
                    ]}
                />
                <ColumnCard
                    title="Education"
                    className="card-item"
                    description={[
                        "Computer Science, B.A. – University of Virginia (2023)"
                    ]}
                />
                <ButtonCard
                    title="Skills"
                    className="card-item"
                    description={[
                        "C++", "Javascript", "Python", "PHP",
                        "HTML", "CSS", "Node/Express", "React", "Tailwind", "REST API",
                        "MVC", "Docker", "MySQL", "OOP", "DOD",
                        "Git", "GitHub", "Confluence", "Jira", "Agile",
                        "VSCode", "Valgrind", "GDB", "GCC", "Fortify", "AWS",
                        "Linux", "Windows", "SDL2", "SSH"
                    ]}
                />
            </div>
            <div className="passage-text">
                Based in Virginia, open to remote work and relocation.
            </div>
            <div className="passage-text">
                {/* TODO make a separate component here for mobile users since HoverImage wont work for them? */}
                I enjoy <HoverImage text="cooking" images={["IMG_0018.JPEG", "IMG_0283.JPEG", "IMG_0394.JPEG", "IMG_0499.JPEG", "IMG_0591.JPEG", "IMG_7487.JPEG", "IMG_7883.JPEG", "IMG_8557.JPEG", "IMG_8998.JPEG"]}></HoverImage>,&nbsp; 
                        <HoverImage text="the outdoors" images={["IMG_0716.JPEG", "IMG_0843.JPEG", "IMG_3912.JPEG", "IMG_4423.JPEG", "IMG_4709.JPEG", "IMG_6528.JPEG", "IMG_6576.JPEG", "IMG_8193.JPEG", "IMG_8301.JPEG"]}></HoverImage>,&nbsp;
                        <HoverImage text="traveling" images={["00025.jpg", "IMG_0791.JPEG", "IMG_1071.JPEG", "IMG_1734_000.jpg", "IMG_1750.JPEG", "IMG_4371.JPEG", "IMG_5589.JPEG", "IMG_8040.JPEG", "IMG_8154.JPEG"]}></HoverImage>,&nbsp;and&nbsp; 
                        <HoverImage text="fostering kittens" images={["IMG_0006.JPEG", "IMG_0306.JPEG", "IMG_0442.JPEG", "IMG_0510.JPEG", "IMG_0564.JPEG", "IMG_1248.JPEG", "IMG_9468.JPEG", "IMG_9603.JPEG", "IMG_9914.JPEG"]}></HoverImage>.
            </div>
            <div className="passage-text">
                Use the arrow keys (← ↑ → ↓) to navigate.
            </div>
        </div>
    )
};