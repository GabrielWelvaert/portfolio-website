import { Tag } from "./Tag";

export const Skills = () => {
    const languages = ["PHP", "Python", "JavaScript", "C++", "SQL", "HTML/CSS"];
    const backendData = ["OOP", "MySQL", "Node.js", "Express", "REST APIs", "WebSockets"];
    const platformsTools = ["AWS", "RHEL/Linux", "Docker", "Git", "Valgrind", "GDB"];
    return (
        <div id="skills" className="flex-col p-2 gap-2 max-w-7xl scroll-mt-[64px]">
            <div className="text-4xl font-bold ">Skills</div>
            <div className="tag-container">
                <div className="flex flex-col max-w-[188px]">
                    <div className="text-2xl mb-2" >Languages</div>
                    <div className="tag-container">
                        {languages.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
                <div className="flex flex-col max-w-[188px]">
                    <div className="text-2xl mb-2" >Backend</div>
                    <div className="tag-container">
                        {backendData.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
                <div className="flex flex-col max-w-[188px]">
                    <div className="text-2xl mb-2" >Tools</div>
                    <div className="tag-container">
                        {platformsTools.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    )
};