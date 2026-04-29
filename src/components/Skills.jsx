import { Tag } from "./Tag";

export const Skills = () => {
    const languages = ["JavaScript", "SQL", "Python", "C++", "PHP", "HTML/CSS"];
    const DevOps = ["AWS", "Docker", "Linux", "Git"];
    const Patterns = ["OOP", "MVC", "REST", "APIs"];

    return (
        <div id="skills" className="flex-col m-3 gap-2 max-w-7xl">
            <div className="text-4xl font-bold ">Skills</div>
            <div className="flex flex-wrap gap-2">
                <div className="flex flex-col max-w-[182px]">
                    <div className="text-2xl mb-4" >Languages</div>
                    <div className="flex flex-wrap gap-1">
                        {languages.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
                <div className="flex flex-col max-w-[182px]">
                    <div className="text-2xl mb-4" >DevOps</div>
                    <div className="flex flex-wrap gap-1">
                        {DevOps.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
                <div className="flex flex-col max-w-[182px]">
                    <div className="text-2xl mb-4" >Patterns</div>
                    <div className="flex flex-wrap gap-1">
                        {Patterns.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>
        </div>
    )
};