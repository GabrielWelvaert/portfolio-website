import { useEffect } from "react";
import { sectionIds } from "../utils";

export function useIntersectionObserver(currentIndex, setCurrentIndex, lastKeyNavRef, options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const now = Date.now();
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newIndex = sectionIds.indexOf(entry.target.id);
          if (newIndex === -1 || newIndex === currentIndex) return;

          // Ignore updates if a key navigation happened in the last 200ms
          if (now - lastKeyNavRef.current < 200) return;

          setCurrentIndex(newIndex); // triggers URL update in App.jsx
        }
      });
    }, { threshold: 0.5, ...options });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentIndex, setCurrentIndex, lastKeyNavRef, options]);
}
