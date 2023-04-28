import { TaskDescription } from "./pages/Task_6";

import { Description } from "./components/TasksListDescription";

import { Routes, Route, useNavigate, NavLink } from "react-router-dom";

import Task1 from "./pages/Task_1";
import Task2 from "./pages/Task_2";
import Task3 from "./pages/Task_3";
import Task4 from "./pages/Task_4";
import Task5 from "./pages/Task_5";

import "../src/styles/style.css";

import arrLeft from "../src/picture/arr_left.png";
import arrRight from "../src/picture/arr_right.png";

const Main = () => {
  return (
    <div className="main">
      Домашнє завдання 4 від
      <br /> <span className="main_span"> Ляшенко Людмили</span>{" "}
    </div>
  );
};

const NextButton = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(+1);
  };

  return (
    <button className="btn_arr" onClick={handleLinkClick}>
      <img className="arr_navig" src={arrLeft} alt="next" />
    </button>
  );
};

const PrevButton = () => {
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate(-1);
  };

  return (
    <button className="btn_arr" onClick={handleLinkClick}>
      <img className="arr_navig" src={arrRight} alt="next" />
    </button>
  );
};

const links = [
  { id: "1", link: "/", name: "Main" },
  { id: "2", link: "task1", name: "Task1" },
  { id: "3", link: "task2", name: "Task2" },
  { id: "4", link: "task3", name: "Task3" },
  { id: "5", link: "task4", name: "Task4" },
  { id: "6", link: "task5", name: "Task5" },
  { id: "7", link: "task_description", name: "TaskDescription" },
];

export const RouterApp = () => {
  return (
    <div>
      <div className="header_link">
        <NextButton />
        {/* <div className="header_li"> */}
        {links.map(({ id, link, name }) => (
          <li key={id}>
            <NavLink
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "rgb(6, 63, 120)",
                };
              }}
              to={link}
            >
              {name}
            </NavLink>
          </li>
        ))}
        {/* </div> */}
        <PrevButton />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="task1" element={<Task1 />} />
        <Route path="task2" element={<Task2 />} />
        <Route path="task3" element={<Task3 />} />
        <Route path="task4" element={<Task4 />} />
        <Route path="task5" element={<Task5 />} />

        <Route path="description" element={<Description />}>
          <Route path=":taskId" element={<TaskDescription />} />
        </Route>
      </Routes>
    </div>
  );
};

// function RouterApp() {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     arrLeft ? navigate(-1)  : navigate(+1);
//   };
//   const routes = useRoutes([
//     { path: '/', element: <Main /> },
//     { path: '/Task1', element: <Task1 /> },
//     { path: '/Task2', element: <Task2 /> },
//     { path: '/Task3', element: <Task3 /> },
//     { path: '/Task4', element: <Task4 /> },
//     { path: '/Task5', element: <Task5 /> }
//   ]);

//   return (
//     <div>

//         <div className="header_link">
//         <img onClick={handleClick} className="arr_navig" src={arrLeft} alt="arr" />
//           <div className="header_li">
//             <Link to="/">Main</Link>
//           </div>
//           <div className="header_li">
//             <Link to="/Task1">Task1</Link>
//           </div>
//           <div className="header_li">
//             <Link to="/Task2">Task2</Link>
//           </div>
//           <div className="header_li">
//             <Link to="/Task3">Task3</Link>
//           </div>
//           <div className="header_li">
//             <Link to="/Task4">Task4</Link>
//           </div>
//           <div className="header_li">
//             <Link to="/Task5">Task5</Link>
//           </div>
//           <img onClick={handleClick} className="arr_navig" src={arrRight} alt="arr" />

//         </div>

//       {routes}
//     </div>
//   );
// }

// export default RouterApp;
