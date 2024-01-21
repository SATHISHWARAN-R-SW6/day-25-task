// src/components/TodoForm.js
import React, { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ taskName, description, status: "not completed" });
    setTaskName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
