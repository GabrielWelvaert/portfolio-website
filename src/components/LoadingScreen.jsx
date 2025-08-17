import { useState, useEffect } from "react";

export const LoadingScreen = () => {
    const [text, setText] = useState("");
    const fullText = "Welcome To My Website!!!";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if(index > fullText.length){
                clearInterval(interval)
                document.getElementById("kill").innerText = "";
            }
        }, 50);
        return () => clearInterval(interval);
    }, [])

    return (
        // outmost div is a flexbox (column) of fixed centered elements
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-6xl font-mono font-bold">
                {text}<span id="kill" className="animate-blink text-6xl ml-1">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}