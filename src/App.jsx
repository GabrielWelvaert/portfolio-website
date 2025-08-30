import "./index.css"
import { useState, useEffect } from "react";
import { LoadingScreen } from './components/LoadingScreen'
import { NavigationBar } from './components/NavigationBar'
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Work } from "./components/Work"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { useNavigationKey } from "./hooks/useNavigationKey";
import { scrollToId, getCurrentIndexFromURL, indexToSection } from "./utils.js";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver.js";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(getCurrentIndexFromURL());

  useNavigationKey(currentIndex, setCurrentIndex); // arrow keys navigation 
  useIntersectionObserver(currentIndex, setCurrentIndex); // scroll navigation

  useEffect(() => { // update URL whenever current index changes
    history.replaceState(null, "", `#${indexToSection.get(currentIndex)}`);
  }, [currentIndex]);
  useEffect(() => { // scroll to current section once welcome screen is done
    if(isLoaded){
      scrollToId();
    }
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}> 
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></NavigationBar>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
        <Home></Home>
        <About></About>
        <Work></Work>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
