import { useState, useEffect } from "react";

export function useIntersectionObserver(sectionIds){
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            history.replaceState(null, "", `#${entry.target.id}`);
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
  }, []); 
}