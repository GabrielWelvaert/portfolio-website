import "./index.css";
import { useState, useEffect } from "react";
import { Header } from './components/Header';
import { MobileMenu } from "./components/MobileMenu";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";

function App() {
  const lastDeployed = import.meta.env.VITE_BUILD_TIME;
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  // hero header is a random image between /yan/Acid_Texture_1.jpg - /yan/Acid_Texture_150.jpg
  const [image] = useState(() => `/yan/Acid_Texture_${Math.floor(Math.random() * 150) + 1}.jpg`);

  // for the theme (dark or light)
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col animate-fadeIn">

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} setTheme={setTheme}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Hero image={image} />

      <div className="flex-1">
        <div className="max-w-[1220px] mx-auto flex flex-col">
          <About theme={theme}/>

          <div className="flex flex-row flex-wrap m-3 gap-6 max-w-7xl">
            <Work/>
            <Skills/>
          </div>

          <Projects theme={theme}/>
        </div>
      </div>

      <footer className="max-w-[1220px] mx-auto w-full align-center flex flex-row align-center justify-center p-2">
        Last deployed: {lastDeployed}
      </footer>

    </div>
  );
}

export default App;
