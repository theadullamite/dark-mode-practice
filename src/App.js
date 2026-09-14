import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
// state to track theme
const [theme, setTheme] = useState("light");

// load saved theme on mount
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}, []);

// save theme + update body class when it changes
useEffect(() => {
  localStorage.setItem("theme", theme);
  document.body.className = theme;
}, [theme]);

// toggle function
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light");
};

  return (
    <div className={`app ${theme}`}>
      <h1>Dark Mode Practice</h1>
      <button onClick={toggleTheme}>
        { theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
      <p> Click the button to switch themes</p>
    </div>
  );
}
