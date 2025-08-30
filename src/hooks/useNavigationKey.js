import { useState, useEffect } from "react";
import { scrollToId } from "../utils.js";

export function useNavigationKey(sectionIds) {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const href =  window.location.hash.replace("#","");
    const index = sectionIds.indexOf(href)
    if(index >= 0){
      return index;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    // console.log("Current index changed:", currentIndex, sectionIds[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    function handleKey(e) {
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
            const incrementIndex = currentIndex + 1; 
            index = incrementIndex % (maxIndex + 1);
          } break;
          case "ArrowUp":
          case "ArrowLeft": {
            const decrementIndex = currentIndex - 1; 
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