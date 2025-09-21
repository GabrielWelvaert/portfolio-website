import { useEffect, useRef } from "react";
import { sectionIds, indexToSection, scrollToId } from "../utils";

export function useNavigationKey(currentIndex, setCurrentIndex) {
  const currentIndexRef = useRef(currentIndex);

  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      const keys = new Set(["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", " "]);
      if (!keys.has(e.key)) return;
      e.preventDefault();

      const maxIndex = sectionIds.length - 1;
      let newIndex = currentIndexRef.current;

      switch (e.key) {
        case " ":
        case "ArrowDown":
        case "ArrowRight":
          newIndex = (currentIndexRef.current + 1) % (maxIndex + 1);
          break;
        case "ArrowUp":
        case "ArrowLeft":
          newIndex = (currentIndexRef.current - 1 + (maxIndex + 1)) % (maxIndex + 1);
          break;
      }

      currentIndexRef.current = newIndex;
      setCurrentIndex(newIndex);

      const sectionId = indexToSection.get(newIndex);
      if (sectionId) scrollToId(sectionId);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setCurrentIndex]);
}
