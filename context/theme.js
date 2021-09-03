import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const mainTheme = {
    "pageBgColor": "#3c7ebc",
    "menuBgColor": "#102A43", 
    "footerBgColor": "#334d65", 
    "textColor": "#803535", 
    "buttonBgColor": "#626365", 
    "buttonTextColor": "#000000"
}

export function ThemeWrapper({ children }) {
    const [theme, setTheme] = useState(mainTheme)

    const toggleTheme = (newTheme) => {
        setTheme(newTheme)

        for (let keyword in newTheme) {
            document.documentElement.style.setProperty(`--${keyword}`, newTheme[keyword])
        }
    }

    let sharedState = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={sharedState}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
