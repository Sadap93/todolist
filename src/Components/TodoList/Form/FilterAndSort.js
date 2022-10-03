import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

const FilterAndSort = ({ todos, setTodos, todosForList, seTodosForList }) => {

  const onChangeFilterHandler = (event) => {
    const filteredTodos = todos.filter((todo) => {
      if (event.target.value === "all") {
        return todo;
      }
      return todo.status === event.target.value;
    });
    seTodosForList(filteredTodos);
  };

  const onChangeSortHandler = (event) => {
    const sortedTodos = todosForList.sort((a, b) => {
      if (event.target.value === "oldestToNewest") {
        return new Date(new Date(a.date)) - new Date(new Date(b.date));
      } else if (event.target.value === "newestToOldest")
        return new Date(new Date(b.date)) - new Date(new Date(a.date));
    });
    seTodosForList([...sortedTodos]);
  };

  return (
    <div className="filter-sort flex-center ">
      <label htmlFor="filter">Filter:</label>
      <select
        className="margin-sm input-style"
        id="filter"
        onChange={onChangeFilterHandler}
      >
        <option value={"all"}>All</option>
        <option value={"progress"}>Progress</option>
        <option value={"success"}>Success</option>
      </select>
      <label htmlFor="sort">Sort:</label>
      <select
        defaultValue={"default"}
        className="margin-sm input-style"
        id="sort"
        placeholder="Sort your todos"
        onChange={onChangeSortHandler}
      >
        <option disabled value={"default"}> -- select an option -- </option>
        <option value={"newestToOldest"}>Sort Newest to Oldest</option>
        <option value={"oldestToNewest"}>Sort Oldest to Newest</option>
      </select>
      <FontAwesomeIcon className="fav-icon-sort" icon={faSortAmountDownAlt} />
    </div>
  );
};

export default FilterAndSort;