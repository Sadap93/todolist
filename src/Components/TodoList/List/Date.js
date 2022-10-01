const Date = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("hu-HU", { month: "long" });
  const day = date.toLocaleString("hu-HU", { day: "2-digit" });
  return (
    <div className="margin-sm">
      <div>{year}. {month} {day}.</div>
    </div>
  );
};

export default Date;
