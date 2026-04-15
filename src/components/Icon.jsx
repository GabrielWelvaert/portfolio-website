// pass either href or onClick - not both
export const Icon = ({ theme, onClick, href, darkPath, lightPath }) => {
    if(!lightPath){
        lightPath = darkPath
    }

    const content = (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 cursor-pointer transition-colors duration-200 text-[var(--text)] hover:text-[var(--accent)]"
        >
            {/* changes vector graphic dispalyed depeding on if dark mode or light mode */}
            <path d={theme === "dark" ? lightPath : darkPath} />
        </svg>
    )

    if (href && !onClick) {
        return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
        );
    }

    return <div onClick={onClick}>{content}</div>;
};