import { useParams, Outlet, NavLink } from "react-router-dom";

const TasksList = [
  { id: "1", name: "Task #1 - Toggler HOC" },
  { id: "2", name: "Task #2 - Fetching Data HOC" },
  { id: "3", name: "Task #3 - render-props" },
  { id: "4", name: "Task #4: - Tooltip" },
  { id: "5", name: "Task #5 - custom hooks" },
];

export const Description = () => {
  return (
    <div>
      <h1>Task 6</h1>

      {TasksList.map(({ id, name }) => (
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "red" : "rgb(6, 63, 120)",
            };
          }}
          className="link"
          key={id}
          to={`/task_description/${id}`}
        >
          {name}
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export const TasksDescription = () => {
  const { taskIdId } = useParams();
  const taskListText = TasksList.map(({ id, name, text }) => () => {
    console.log("taskListText", taskListText);

    if (taskIdId === id) {
      return TasksList.text;
    }
  });

  return (
    <div>
      <div>TaskId : {taskIdId}</div>
      <div>text: {taskListText.text}</div>
    </div>
  );
};

{
  /* <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "rgb(6, 63, 120)",
          };
        }}
        className="link"
        to={`:taskId${taskIds[0]}`}
      >
        Task #1 - Toggler HOC
      </NavLink> */
}
