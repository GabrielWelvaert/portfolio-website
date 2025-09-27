import "./index.css";
import { useState, useEffect, useRef } from "react";
import { NavigationBar } from './components/NavigationBar';
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { useNavigationKey } from "./hooks/useNavigationKey";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { scrollToId, getCurrentIndexFromURL, indexToSection, sectionIds } from "./utils.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndexFromURL());

  // Track last arrow key navigation to avoid flicker
  const lastKeyNavRef = useRef(0);

  const handleSetCurrentIndex = (newIndex, source = "scroll") => {
    setCurrentIndex(newIndex);
    if (source === "key") lastKeyNavRef.current = Date.now();
  };

  // Arrow key navigation
  useNavigationKey(currentIndex, (newIndex) => handleSetCurrentIndex(newIndex, "key"));
  // Scroll navigation
  useIntersectionObserver(currentIndex, handleSetCurrentIndex, lastKeyNavRef);

  // Update URL whenever currentIndex changes (keys or scroll)
  useEffect(() => {
    const sectionId = indexToSection.get(currentIndex);
    if (sectionId) history.replaceState(null, "", `#${sectionId}`);
  }, [currentIndex]);

  // Scroll to current section once loaded. avoids weirdness if refresh while viewing a project
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToId();
    }, 1000); // match your fade duration

    return () => clearTimeout(timer);
  }, []);

  return (
      <div className={`min-h-screen animate-fadeIn bg-black text-gray-100`}>
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <About/>
        <Work/>
        <Projects/>
      </div>
  );
}

export default App;
