import  { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTodo = () => {
    if (!title.trim() && !desc.trim()) return;

    // Keep the data shape unchanged – concatenate title + desc
    const text = desc.trim() ? `${title.trim()} — ${desc.trim()}` : title.trim();

    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false }
    ]);
    setTitle("");
    setDesc("");
  };

  const onEnter = (e) => e.key === "Enter" && addTodo();

  return (
    <div className="input-container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        onKeyDown={onEnter}
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        onKeyDown={onEnter}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
