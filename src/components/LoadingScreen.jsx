import { useState, useEffect } from "react";

export const LoadingScreen = ({onComplete}) => { // loading screen component, passed prop is parent setter function
    const [text, setText] = useState(""); // internal state for this component and its setter function
    const fullText = "Welcome To My Website!!!";
    useEffect(() => { // useEffect is a built-in hook for side effects (anything that doesn't return jsx)
        let index = 0;
        const interval = setInterval(() => { // run this function every 50 ms
            setText(fullText.substring(0, index));
            index++;
            if(index > fullText.length){
                clearInterval(interval) // stop the running interval
                setTimeout(() => { // wait 250 ms before body is executed
                    onComplete(); // calling passed prop, which is callback
                }, 250)
            }
        }, 50);
        return () => clearInterval(interval); // to stop memory leaks
    }, [onComplete]) // dependency array must be passed to useEffect, changes to these cause re-render of component

    return (
        // outmost div is a flexbox (column) of fixed centered elements
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-6xl font-mono font-bold text-center">
                {text}<span className="animate-blink text-6xl ml-1">|</span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    )
}