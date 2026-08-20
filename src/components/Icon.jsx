
// Icons are clickable SVG elements that respond to dark / light mode. pass either href or onClick - not both
export const Icon = ({ theme, onClick, href, darkPath, lightPath, disabled = false }) => {
    if(!lightPath){
        lightPath = darkPath
    }

    const content = (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-8 h-8 transition-colors duration-200 ${
                disabled
                    ? "cursor-default opacity-50"
                    : "cursor-pointer text-[var(--text)] hover:text-[var(--accent)]"
            }`}
        >
            {/* changes vector graphic dispalyed depeding on if dark mode or light mode */}
            <path d={theme === "dark" ? lightPath : darkPath} />
        </svg>
    )

    // wrap the content in an anchor with href for links
    if (href && !onClick && !disabled) {
        return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
        );
    }
    // otherwise, wrap the content in a div with onClick (ex: light/dark mode button)
    return <div onClick={onClick}>{content}</div>;
};