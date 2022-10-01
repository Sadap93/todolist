const DateComponent = ({ date, isEdit, newDate, setNewDate }) => {

  const newDateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };
  
  const year = date.getFullYear();
  const month = date.toLocaleString("hu-HU", { month: "long" });
  const day = date.toLocaleString("hu-HU", { day: "2-digit" });
  return (
    <>
      {isEdit && (
        <input
          className="margin-sm"
          type="date"
          value={newDate}
          onChange={newDateChangeHandler}
        ></input>
      )}
      {!isEdit && (
        <div className="margin-sm">
          <div>
            {year}. {month} {day}.
          </div>
        </div>
      )}
    </>
  );
};

export default DateComponent;
