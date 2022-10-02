import ListItem from "./ListItem";

const List = ({ todos, setTodos }) => {
  return (
    <div className="wrapper">
      {todos.map((todo) => (
        <ListItem
          title={todo.title}
          date={todo.date}
          status={todo.status}
          id={todo.id}
          key={todo.id}
          setTodos={setTodos}
          todos={todos}
        />
      ))}
    </div>
  );
};

export default List;
