import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDownAlt } from "@fortawesome/free-solid-svg-icons";

const FilterAndSort = ({ todos, setTodos }) => {
  return (
    <div className="filter-sort flex-center ">
      <label htmlFor="filter">Filter:</label>
      <select className="margin-sm" id="filter">
        <option>All</option>
        <option>Progress</option>
        <option>Success</option>
      </select>
      <label htmlFor="sort">Sort:</label>
      <select className="margin-sm" id="sort">
        <option>Sort Newest to Oldest</option>
        <option>Sort Oldest to Newest</option>
      </select>
      <FontAwesomeIcon className="fav-icon-sort" icon={faSortAmountDownAlt} />
    </div>
  );
};

export default FilterAndSort;
