import React from "react";
import List from "./List/List";
import Form from "./Form/Form";
import { useEffect, useState } from "react";

const todoFromLocalStorage = JSON.parse(localStorage.getItem("todoData"));

const TodoList = () => {
  const [todos, setTodos] = useState(todoFromLocalStorage ?? []);
  const [todosForList, seTodosForList] = useState(todos);

  useEffect(() => {
    seTodosForList(todos);
    localStorage.setItem("todoData", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-list padding-xs">
      <Form todos={todos} setTodos={setTodos} seTodosForList={seTodosForList} />
      <List todos={todosForList} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;