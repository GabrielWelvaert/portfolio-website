import { Tag } from "./Tag";

export const Skills = () => {
    const languages = ["JavaScript", "SQL", "Python", "C++", "PHP", "HTML/CSS"];
    const DevOps = ["AWS", "Docker", "Linux", "Git"];
    const Patterns = ["OOP", "MVC", "REST", "APIs"];

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
                    <div className="text-2xl mb-2" >DevOps</div>
                    <div className="tag-container">
                        {DevOps.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
                <div className="flex flex-col max-w-[188px]">
                    <div className="text-2xl mb-2" >Patterns</div>
                    <div className="tag-container">
                        {Patterns.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    )
};