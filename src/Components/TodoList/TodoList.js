import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoFromLocalStorage = localStorage.getItem("todoData");
    if (todoFromLocalStorage !== null)
      setTodos(JSON.parse(todoFromLocalStorage));
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todoData", JSON.stringify(todos));
    }
  }, [todos]);

      return (
      <div className="todo-list">
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </div>
    );
};

export default TodoList;
