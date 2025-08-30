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
import { scrollToId } from "./utils.js";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver.js";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = ["home", "about", "work", "projects", "contact"];
  useNavigationKey(sectionIds);
  useIntersectionObserver(sectionIds);
  useEffect(() => {
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
