import { Tag } from "./Tag";

export const Work = () => {
    const workStack = ["",""];
    return (

        <div id="work" className="flex-col m-3 gap-6 max-w-7xl">
        
            <div className="text-4xl font-bold p-2">Work & Skills</div>

            <div id="work" className="flex flex-wrap gap-6 text-2xl p-2 justify-between">
                <div>Software Developer (2024 - Present)</div>

                <div className="flex flex-wrap gap-6 justify-between">
                    <div>Languages</div>
                    <div>Languages</div>
                    <div>Languages</div>
                </div>
            </div>    

        </div>
        // <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        //     {workStack.map(item => <Tag key={item}>{item}</Tag>)}
        // </div>
    )
};