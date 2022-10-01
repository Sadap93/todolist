import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const FilterAndSort = ({ todos, setTodos }) => {
  const [copyTodos, setCopyTodos] = useState(todos);

  const onChangeFilterHandler = (event) => {
    const filteredTodos = copyTodos.filter((todo) => {
      if (event.target.value === "all") {
        return todo;
      }
      return todo.status === event.target.value;
    });
    setTodos(filteredTodos);
  };

  const onChangeSortHandler = (event) => {
    const sortedTodos = todos.sort((a, b) => {
      if (event.target.value === "oldestToNewest") {
        return a.date - b.date;
      } else if (event.target.value === "newestToOldest")
        return b.date - a.date;
    });
    console.log(sortedTodos);
    setTodos([...sortedTodos]);
  };

  return (
    <div className="filter-sort flex-center ">
      <label htmlFor="filter">Filter:</label>
      <select
        className="margin-sm"
        id="filter"
        onChange={onChangeFilterHandler}
      >
        <option value={"all"}>All</option>
        <option value={"progress"}>Progress</option>
        <option value={"success"}>Success</option>
      </select>
      <label htmlFor="sort">Sort:</label>
      <select
        className="margin-sm"
        id="sort"
        placeholder="Sort your todos"
        onChange={onChangeSortHandler}
      >
        <option value={"newestToOldest"}>Sort Newest to Oldest</option>
        <option value={"oldestToNewest"}>Sort Oldest to Newest</option>
      </select>
      <FontAwesomeIcon className="fav-icon-sort" icon={faSortAmountDownAlt} />
    </div>
  );
};

export default FilterAndSort;
