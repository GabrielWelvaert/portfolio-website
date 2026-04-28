import { Tag } from "./Tag";

export const ProjectCard = ({title, description, tags, Icon}) => {
    return (
        <div className="rounded border-2 border-[var(--border)] flex-col w-[380px] h-[250px] p-2">
            <div className = "flex flex-row justify-between">
                <div className="text-2xl">{title}</div>
                {Icon}
            </div>
            <div>{description}</div>
            <div className="flex flex-wrap gap-2">
                {tags.map(item => <Tag key={item}>{item}</Tag>)}
            </div>
        </div>
    )
}