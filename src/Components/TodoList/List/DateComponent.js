const DateComponent = ({ date, isEdit, newDate, setNewDate }) => {
  const newDateChangeHandler = (event) => {
    setNewDate(event.target.value);
  };
  const initDate = new Date(date);
  const year = initDate.getFullYear();
  const month = initDate.toLocaleString("hu-HU", { month: "long" });
  const day = initDate.toLocaleString("hu-HU", { day: "2-digit" });
  return (
    <>
      {isEdit && (
        <input
          className="margin-sm input-style"
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