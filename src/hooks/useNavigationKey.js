import { useState, useEffect } from "react";
import { scrollToId, sectionIds, getCurrentIndexFromURL } from "../utils.js";

// this hook creates a keypress event listener for the window
// and keeps track of where we are so we can move between sections

export function useNavigationKey() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    getCurrentIndexFromURL();
  });

  // for debugging
  // useEffect(() => { 
  //   console.log("Current index changed:", currentIndex, sectionIds[currentIndex]);
  // }, [currentIndex]);

  useEffect(() => {
    function handleKey(e) {
      const URLIndex = getCurrentIndexFromURL();
      let currentEffectiveIndex = currentIndex;
      if(URLIndex != currentIndex){
        currentEffectiveIndex = URLIndex;
      }
      const arrowKeys = new Set(["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", " "]);
      const key = e.key;
      const maxIndex = sectionIds.length - 1;
      if(key && arrowKeys.has(key)){
        e.preventDefault();
        let index;
        switch(key){
          case " ":
          case "ArrowDown":
          case "ArrowRight": {
            const incrementIndex = currentEffectiveIndex + 1; 
            index = incrementIndex % (maxIndex + 1);
          } break;
          case "ArrowUp":
          case "ArrowLeft": {
            const decrementIndex = currentEffectiveIndex - 1; 
            decrementIndex < 0 ? index = maxIndex : index = decrementIndex
          } break;
        }
        setCurrentIndex(index);
        const id = sectionIds[index];
        history.replaceState(null, "", `#${id}`);
        scrollToId(id);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [sectionIds]);
}