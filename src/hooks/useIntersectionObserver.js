import { useState, useEffect } from "react";
import { sectionIds, sectionToIndex } from "../utils.js";

// this hook updates the url with current section in viewport

export function useIntersectionObserver(currentIndex, setCurrentIndex, lastNavRef, options = {}) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // skip updates if a navigation happened recently
      if (Date.now() - lastNavRef.current < 200) return;

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newIndex = sectionIds.indexOf(entry.target.id);
          if (newIndex !== -1 && newIndex !== currentIndex) {
            setCurrentIndex(newIndex);
          }
        }
      });
    }, options);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentIndex, setCurrentIndex, lastNavRef, options]);
}