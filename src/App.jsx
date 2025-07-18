import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/todoapp/TodoForm";
import TodoList from "./components/todoapp/TodoList";
import { FiSun, FiMoon } from "react-icons/fi"; // Icons for slider

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  
    // Apply the theme class to <html> tag
    document.documentElement.className = darkMode ? "dark" : "";

  }, [darkMode]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>

        {/* Slider Switch */}
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          />
          <span className="slider">
            {darkMode ? <FiMoon size={16} /> : <FiSun size={16} style={{ color: "#ff7f50" }}/>}
          </span>
        </label>
      </header>

      <div className="todo-container">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
