import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todosForList, seTodosForList] = useState(todos);

  useEffect(() => {
    const todoFromLocalStorage = localStorage.getItem("todoData");
    if (todoFromLocalStorage !== null)
      setTodos(JSON.parse(todoFromLocalStorage));
      seTodosForList(todos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      seTodosForList(todos);
      localStorage.setItem("todoData", JSON.stringify(todos));
    }
  }, [todos]);

      return (
      <div className="todo-list">
        <Form todos={todos} setTodos={setTodos} seTodosForList={seTodosForList} />
        <List todos={todosForList} setTodos={setTodos} />
      </div>
    );
};

export default TodoList;
