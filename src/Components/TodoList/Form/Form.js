import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterAndSort from "./FilterAndSort";

const Form = ({ setTodos, todos }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [emptyInputStyle, setEmptyInputStyle] = useState({});
  const [emptyDateStyle, setEmptyDateStyle] = useState({});
  const [titileIsValid, setTitleIsValid] = useState(false);
  const [dateIsValid, setDateIsValid] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const todoData = {
    title: enteredTitle,
    date: new Date(enteredDate),
    status: "progress",
    id: uuidv4(),
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle === "" && enteredDate === "") {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setEmptyInputStyle({ border: "solid 2px #F85555" });
      setEmptyDateStyle({ border: "solid 2px #F85555" });
      setTitleIsValid(true);
      setDateIsValid(true);
    } else if (enteredTitle === "") {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setEmptyInputStyle({ border: "solid 2px #F85555" });
      setTitleIsValid(true);
      setDateIsValid(false);
    } else if (enteredTitle === "" && enteredDate !== "") {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setEmptyInputStyle({ border: "solid 2px #F85555" });
      setEmptyDateStyle({});
      setTitleIsValid(true);
      setDateIsValid(false);
    } else if (enteredDate === "") {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setEmptyDateStyle({ border: "solid 2px #F85555" });
      setTitleIsValid(false);
      setDateIsValid(true);
    } else if (enteredDate === "" && enteredTitle !== "") {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setEmptyDateStyle({ border: "solid 2px #F85555" });
      setEmptyInputStyle({});
      setTitleIsValid(false);
      setDateIsValid(true);
    } else {
      setEmptyInputStyle({});
      setEmptyDateStyle({});
      setTodos((prevTodos) => {
        return [todoData, ...prevTodos];
      });

      setEnteredTitle("");
      setEnteredDate("");
      setTitleIsValid(false);
      setDateIsValid(false);
    }
  };

  return (
    <div className="flex-center card control">
      <h3>My Todo's</h3>
      <form className="flex-center" onSubmit={onSubmitHandler}>
        <div className="input-wrapper">
          <input
            style={emptyInputStyle}
            className="margin-sm"
            type="text"
            placeholder="Add new..."
            value={enteredTitle}
            onChange={titleChangeHandler}
            ></input>
            {titileIsValid && <small className="warning">Must be filled!</small>}
        </div>
        <div className="input-wrapper">
          <input
            style={emptyDateStyle}
            className="margin-sm"
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
          {dateIsValid && <small className="warning">Must be chosen!</small>}
        </div>
        <button className="add-btn margin-sm" type="submit">
          Add
        </button>
      </form>
      <FilterAndSort todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Form;
