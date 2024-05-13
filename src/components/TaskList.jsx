const TaskList = (props) => {
  return (
    <div>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.userId}</div>
            <p className="card-text">{props.title}</p>
          </div>
          <span className="badge text-bg-primary rounded-pill">
            {props.completed ? "Completed" : "Not Completed"}
          </span>
        </li>
   
    </div>
  );
};

export default TaskList;
