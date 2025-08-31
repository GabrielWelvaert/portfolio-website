import { useState } from "react";

export const HoverImage = ({text, images}) => {
    const [hovered, setHovered] = useState(false);
    const [mouseY, setMouseY] = useState(0);
    const displayedImages = (images ?? []).slice(0, 9);

    return (
        <div className="inline-block">
            <span className="hover-image-text"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onMouseMove={(e) => setMouseY(e.clientY)}
            >
                {text}
            </span>
            {hovered && (
                <div className="hover-image-display-grid" style={{ top: mouseY - 850 }}>
                    {displayedImages.map((src, id) => (
                    <img
                        key={id}
                        src={`/public/${src}`}
                        className="hover-image"
                    />
                    ))}
                </div>
            )}
        </div>
    );

}