import TaskList from "../components/TaskList";

const Todo = ({ todos }) => {
  return (
    <div>
        <ul className="list-group-item list-group-numbered">
          {todos.map((task) => (
            <TaskList key={task.id} {...task} />
          ))}
        </ul>
    </div>
  );
};

export default Todo;
