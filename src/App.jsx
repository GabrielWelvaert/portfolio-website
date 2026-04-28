import "./index.css";
import { useState, useEffect, useRef } from "react";
import { Header } from './components/Header';
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { useNavigationKey } from "./hooks/useNavigationKey";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { scrollToId, getCurrentIndexFromURL, indexToSection, sectionIds } from "./utils.js";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndexFromURL());
  const [theme, setTheme] = useState("dark");
  // hero header is a random image between /yan/Acid_Texture_1.jpg - /yan/Acid_Texture_150.jpg
  const [image] = useState(() => `/yan/Acid_Texture_${Math.floor(Math.random() * 150) + 1}.jpg`);

  // for the theme (dark or light)
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // // Track last arrow key navigation to avoid flicker
  // const lastKeyNavRef = useRef(0);

  // const handleSetCurrentIndex = (newIndex, source = "scroll") => {
  //   setCurrentIndex(newIndex);
  //   if (source === "key") lastKeyNavRef.current = Date.now();
  // };

  // // Arrow key navigation
  // useNavigationKey(currentIndex, (newIndex) => handleSetCurrentIndex(newIndex, "key"));
  // // Scroll navigation
  // useIntersectionObserver(currentIndex, handleSetCurrentIndex, lastKeyNavRef);

  // Update URL whenever currentIndex changes (keys or scroll)
  // useEffect(() => {
  //   const sectionId = indexToSection.get(currentIndex);
  //   if (sectionId) history.replaceState(null, "", `#${sectionId}`);
  // }, [currentIndex]);

  // Scroll to current section once loaded. avoids weirdness if refresh while viewing a project
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     scrollToId();
  //   }, 1000); // match fade duration

  //   return () => clearTimeout(timer);
  // }, []);

  return (
      <div className={`min-h-screen animate-fadeIn`} >
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Hero image={image}></Hero>
          <div className="max-w-[1220px] mx-auto flex flex-col">
            <About theme={theme}/>
            <div className="flex flex-row flex-wrap m-3 gap-6 max-w-7xl">
              <Work/>
              <Skills/>
            </div>
            <Projects theme={theme}/>
          </div>
      </div>
  );
}

export default App;
