import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterAndSort from "./FilterAndSort";

const Form = ({ setTodos, todos }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const todoData = {
    title: enteredTitle,
    date: enteredDate,
    status: "progress",
    id: uuidv4(),
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTodos((prevTodos) => {
      return [todoData, ...prevTodos];
    });

    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <div className="flex-center card control">
      <h3>My Todo's</h3>
      <form onSubmit={onSubmitHandler}>
        <input
          className="margin-sm"
          type="text"
          placeholder="Add new..."
          value={enteredTitle}
          onChange={titleChangeHandler}
        ></input>
        <input
          className="margin-sm"
          type="date"
          value={enteredDate}
          onChange={dateChangeHandler}
        ></input>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
      <FilterAndSort todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Form;
