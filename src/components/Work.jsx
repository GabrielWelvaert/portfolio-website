import { Tag } from "./Tag";

export const Work = () => {
    const workStack = ["PHP","MySQL","AWS","JavaScript","HTML/CSS","Python","RHEL","REST APIs"];
    return (
        <div id="work" className="flex-col p-2 gap-6 max-w-[560px] scroll-mt-[64px]">
            <div className="text-4xl font-bold">Work History</div>
            <div id="work" className="flex flex-wrap gap-6 justify-between">
                <div className="flex flex-col gap-2">
                    <div className="text-2xl">ARDX - Software Engineer (2024 - Present)</div>
                    <div>Developing full-stack improvements for a federal web application, including backend APIs, frontend refactors, database work, and security remediations.</div>
                    <div className="tag-container">
                        {workStack.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>    
        </div>
    )
};