
import { FaEdit, FaTrash } from "react-icons/fa";

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
  const isEditing = editingId === todo.id;

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {isEditing ? (
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
            <button aria-label="Edit" onClick={() => startEditing(todo)}>
              <FaEdit style={{ color: "rgb(19 183 89 / 90%)" }}/>
            </button>
            <button aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
              <FaTrash style={{ color: "rgb(250 21 98)" }}/>
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
