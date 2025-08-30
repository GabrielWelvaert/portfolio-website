import { useState, useEffect } from "react";
import { scrollToId, sectionIds, getCurrentIndexFromURL, indexToSection, sectionToIndex } from "../utils.js";

// this hook creates a keypress event listener for the window
// and keeps track of where we are so we can move between sections

export function useNavigationKey(currentIndex, setCurrentIndex) {
  // for debugging
  // useEffect(() => { 
  //   console.log("Current index changed:", currentIndex, indexToSection.get(currentIndex));
  // }, [currentIndex]);

  useEffect(() => {
    function handleKey(e) {
      const arrowKeys = new Set(["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", " "]);
      const key = e.key;
      const maxIndex = sectionIds.length - 1;
      if(key && arrowKeys.has(key)){
        e.preventDefault();
        let newIndex;
        switch(key){
          case " ":
          case "ArrowDown":
          case "ArrowRight": {
            const incrementIndex = currentIndex + 1; 
            newIndex = incrementIndex % (maxIndex + 1);
          } break;
          case "ArrowUp":
          case "ArrowLeft": {
            const decrementIndex = currentIndex - 1; 
            decrementIndex < 0 ? newIndex = maxIndex : newIndex = decrementIndex
          } break;
        }
        setCurrentIndex(newIndex);
        const currentSection = indexToSection.get(newIndex);
        scrollToId(currentSection);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, setCurrentIndex]);
}