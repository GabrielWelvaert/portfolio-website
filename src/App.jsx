import { useState, useEffect } from "react";
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}</>
  )
}

export default App
