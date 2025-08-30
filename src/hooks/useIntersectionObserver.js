import { useState, useEffect } from "react";
import { sectionIds, sectionToIndex } from "../utils.js";

// this hook updates the url with current section in viewport

export function useIntersectionObserver(currentIndex, setCurrentIndex){
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setCurrentIndex(sectionToIndex.get(entry.target.id));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentIndex, setCurrentIndex]); 
}