import { Tag } from "./Tag";

export const ProjectCard = ({title, description, tags, Icon}) => {
    return (
        <div className="rounded border-2 border-[var(--border)] flex flex-col  w-[380px] p-2 gap-2 min-h-[217px]">
            <div className = "flex flex-row justify-between">
                <div className="text-2xl">{title}</div>
                {Icon}
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div>{description}</div>
                {tags?.length > 0 && (
                    <div className="tag-container">
                        {tags.map(item => <Tag key={item}>{item}</Tag>)}
                    </div>
                )}
            </div>
        </div>
    )
}