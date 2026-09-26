import { Tag } from "./Tag";

export const Work = () => {
    const workStack = ["PHP","MySQL","AWS","JavaScript","HTML/CSS","Python","RHEL 9","REST APIs","Docker","OOP"];
    return (
        <div id="work" className="flex-col p-2 gap-6 max-w-[580px] scroll-mt-[64px]">
            <div className="text-4xl font-bold">Work History</div>
            <div id="work" className="flex flex-wrap gap-6 justify-between">
                <div className="flex flex-col gap-2">
                    <div className="text-2xl">ARDX - Software Engineer (2024 - Present)</div>
                    <div>
                        Maintaining a RHEL 9 LAMP application supporting 200,000+ users, with work spanning full-stack change requests and defect remediation across releases and hotfixes, legacy PHP modernization, relational database design and AWS RDS administration, penetration-test, security, and Section 508 remediation, and development of a support chatbot and custom regression testing framework.
                    </div>
                    <div className="tag-container">
                        {workStack.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                </div>
            </div>    
        </div>
    )
};