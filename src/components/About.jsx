import { ColumnCard } from "./ColumnCard";
import { ButtonCard } from "./ButtonCard";
import { HoverImage } from "./HoverImage";
import { Icon } from "./Icon";

export const About = ({theme}) => {
    return (
        <div id="about" className="page-content-container-centered-1000">
            <div className="flex flex-wrap gap-6 m-3 justify-center">
                <img className="portrait-image w-60% h-60%" src='/cat.jpg'></img>
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex gap-4">
                        <Icon 
                            theme={theme} 
                            href={"https://github.com/GabrielWelvaert"}
                            darkPath = "M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
                        />
                        <Icon 
                            theme={theme} 
                            href={"http://www.linkedin.com/in/gabriel-welvaert-509444284"}
                            darkPath = "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                        />
                        <Icon 
                            theme={theme} 
                            href={"mailto:gabewelvaert@gmail.com"}
                            darkPath = "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
                        />
                    </div>
                    <div className="text-5xl font-bold">
                        Gabriel Welvaert
                    </div>
                    <div className="text-2xl font-bold">
                        Full Stack Software Engineer
                    </div>
                    <div className="text-2xl font-bold">
                        UVA CS Alum | AWS SAA Certified
                    </div>
                </div>
            </div>
        </div>
        // <div id="about" className="page-content-container-centered-1000">
        //     <div className="passage-text-header">Gabriel Welvaert</div>
        //     <div className="passage-text">
        //         Full-Stack Software Engineer
        //     </div>
        //     <div className="flex flex-row gap-8">
        //         <a className="hover-image-text" href="mailto:gabewelvaert@gmail.com" target="_blank" rel="noopener noreferrer">Email</a> 
        //         <a className="hover-image-text" href="http://www.linkedin.com/in/gabriel-welvaert-509444284" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        //         <a className="hover-image-text" href="https://github.com/GabrielWelvaert" target="_blank" rel="noopener noreferrer">GitHub</a>
        //         <a className="hover-image-text" href="/resume.pdf" download>Resume</a>
        //     </div>
        //     <div className="cards-row">
        //         <ColumnCard
        //             title="Preferred Languages"
        //             className="card-item"
        //             description={[
        //                 "Python for scripting, automation, data analysis",
        //                 "C++ for performance and control",
        //                 "Javascript and its frameworks for the web",
        //             ]}
        //         />
        //         <ColumnCard
        //             title="Education"
        //             className="card-item"
        //             description={[
        //                 "Computer Science, B.A. – University of Virginia (2023)"
        //             ]}
        //         />
        //         <ButtonCard
        //             title="Skills"
        //             className="card-item"
        //             description={[
        //                 "C++", "Javascript", "Python", "PHP",
        //                 "HTML", "CSS", "Node/Express", "React", "Tailwind", "REST API",
        //                 "MVC", "Docker", "MySQL", "OOP", "DOD",
        //                 "Git", "GitHub", "Confluence", "Jira", "Agile",
        //                 "VSCode", "Valgrind", "GDB", "GCC", "Fortify", "AWS",
        //                 "Linux", "Windows", "SDL2", "SSH"
        //             ]}
        //         />
        //     </div>
        //     <div className="passage-text">
        //         Based in Virginia, open to remote work and relocation.
        //     </div>
        //     <div className="passage-text">
        //         I enjoy <HoverImage text="cooking" images={["IMG_0018.JPEG", "IMG_0283.JPEG", "IMG_0394.JPEG", "IMG_0499.JPEG", "IMG_0591.JPEG", "IMG_7487.JPEG", "IMG_7883.JPEG", "IMG_8557.JPEG", "IMG_8998.JPEG"]}></HoverImage>,&nbsp; 
        //                 <HoverImage text="the outdoors" images={["IMG_0716.JPEG", "IMG_0843.JPEG", "IMG_3912.JPEG", "IMG_4423.JPEG", "IMG_4709.JPEG", "IMG_6528.JPEG", "IMG_6576.JPEG", "IMG_8193.JPEG", "IMG_8301.JPEG"]}></HoverImage>,&nbsp;
        //                 <HoverImage text="traveling" images={["00025.jpg", "IMG_0791.JPEG", "IMG_1071.JPEG", "IMG_1734_000.jpg", "IMG_1750.JPEG", "IMG_4371.JPEG", "IMG_5589.JPEG", "IMG_8040.JPEG", "IMG_8154.JPEG"]}></HoverImage>,&nbsp;and&nbsp; 
        //                 <HoverImage text="fostering kittens" images={["IMG_0006.JPEG", "IMG_0306.JPEG", "IMG_0442.JPEG", "IMG_0510.JPEG", "IMG_0564.JPEG", "IMG_1248.JPEG", "IMG_9468.JPEG", "IMG_9603.JPEG", "IMG_9914.JPEG"]}></HoverImage>.
        //     </div>
        //     <div className="passage-text">
        //         Use the arrow keys (← ↑ → ↓) to navigate.
        //     </div>
        // </div>
    )
};