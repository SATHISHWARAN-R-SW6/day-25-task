import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./Styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), ...todo }]);
  };

  const editTodo = (id) => {
    // Implement edit functionality
    console.log(`Editing todo with id ${id}`);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    // Implement change status functionality
    console.log(`Changing status of todo with id ${id} to ${newStatus}`);
  };

  const filteredTodos =
    filterStatus === "all"
      ? todos
      : todos.filter((todo) => todo.status === filterStatus);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
      <div>
        <label>
          Filter Status:
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </label>
      </div>
      <TodoList
        todos={filteredTodos}
        onEdit={editTodo}
        onDelete={deleteTodo}
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default App;
