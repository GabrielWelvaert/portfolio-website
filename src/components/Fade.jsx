import { useState, useEffect } from "react";

export const Fade = ({ show, children, duration = 1000 }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  return shouldRender ? (
    <div
      className={`transition-opacity duration-${duration} ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onTransitionEnd={onAnimationEnd}
    >
      {children}
    </div>
  ) : null;
}