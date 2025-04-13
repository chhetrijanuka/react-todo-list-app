import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoEmpty from './TodoEmpty';

export default function TodoList ({ todos, setTodos })  {
const [editingId, setEditingId] = useState(null);
const [editingText, setEditingText] = useState('');
// Save todos to localStorage whenever they change
useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
const toggleComplete = (id) => {
setTodos(todos.map(todo => 
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
));
};
const saveEdit = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: editingText } : todo
    ));
    setEditingId(null);
};
const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
};
const cancelEdit = () => {
    setEditingId(null);
};
const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
};
  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            cancelEdit = {cancelEdit}
            saveEdit = {saveEdit}
            startEditing= {startEditing}
            editingText = {editingText}
            setEditingText = {setEditingText}
            editingId = {editingId}
          />
        ))
      ) : (
        <TodoEmpty />
      )}
    </ul>
  );
};
