import { Tag } from "./Tag";

export const Work = () => {
    const workStack = ["PHP","MySQL","AWS","JavaScript","HTML/CSS","Python","RHEL","REST APIs"];
    return (
        <div id="work" className="flex-col m-3 gap-6 max-w-[560px] scroll-mt-[64px]">
            <div className="text-4xl font-bold">Work History</div>
            <div id="work" className="flex flex-wrap gap-6 text-2xl justify-between">
                <div className="flex flex-col gap-4">
                    <div>ARDX - Software Engineer (2024 - Present)</div>
                    <div className="tag-container">
                        {workStack.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>    
        </div>
    )
};