import React, { useState } from 'react';

const TodoForm = ({todos,setTodos}) => {
    const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };
  return (
        <div className="input-container">
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
        />
        <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoForm;