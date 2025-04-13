
import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/todoapp/TodoForm';
import TodoList from './components/todoapp/TodoList';

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  return (
    <div className="app">
      <header>
        <h1>Todo App</h1>
      </header>

      <div className="todo-container">
        <TodoForm todos={todos} setTodos={setTodos}/>
       <TodoList todos = {todos} setTodos = {setTodos}/>
      </div>
    </div>
  );
}

export default App;