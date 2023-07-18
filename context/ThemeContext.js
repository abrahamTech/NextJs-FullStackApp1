"use client"

import { createContext, useState } from "react"


export const ThemeContext = createContext();

//It's the same "children" as in the layout.js file
export const ThemeProvider = ({ children }) => {
    
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    //Any page or component will be able to use this toggle function or "mode" value
    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
        
            <div className={`theme ${mode}`}> { children }</div>

        </ThemeContext.Provider>
    );
};