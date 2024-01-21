// src/components/TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onEdit, onDelete, onChangeStatus }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onEdit={() => onEdit(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
};

export default TodoList;
