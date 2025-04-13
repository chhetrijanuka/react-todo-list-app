import React, { useState } from 'react';

const TodoItem = ({
    todo,
    toggleComplete,
    deleteTodo,
    cancelEdit,
    saveEdit,
    startEditing,
    editingText,
    setEditingText,
    editingId 
}) => {
    return (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {editingId === todo.id ? (
                <div className="edit-container">
                    <input
                        type="text"
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        autoFocus
                    />
                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                    <button onClick={cancelEdit}>Cancel</button>
                </div>
            ) : (
                <>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <span className="todo-text">{todo.text}</span>
                    <div className="todo-actions">
                        <button onClick={() => startEditing(todo)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </>
            )}
        </li>
    );
};
export default TodoItem;