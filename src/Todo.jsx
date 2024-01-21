// src/components/Todo.js
import React, { useState } from "react";

const Todo = ({ todo, onEdit, onDelete, onChangeStatus }) => {
  const [status, setStatus] = useState(todo.status);

  const handleStatusChange = () => {
    const newStatus = status === "completed" ? "not completed" : "completed";
    setStatus(newStatus);
    onChangeStatus(todo.id, newStatus);
  };

  return (
    <div className="todo-card">
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <p>Status: {status}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <button onClick={handleStatusChange}>Change Status</button>
    </div>
  );
};

export default Todo;
