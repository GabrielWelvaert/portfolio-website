import { useState, useEffect } from "react";
import { LoadingScreen } from './components/LoadingScreen'
import { NavigationBar } from './components/NavigationBar'
import "./index.css"
import { MobileMenu } from "./components/MobileMenu";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}> 
        <NavigationBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></NavigationBar>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></MobileMenu>
      </div>
    </>
  )
}

export default App
