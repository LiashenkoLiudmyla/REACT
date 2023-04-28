import {  useParams } from "react-router-dom";

import Description from "./TasksListDescription"

const taskContent = [
    { id: "1", text: "**Задача №1**" },
    { id: "2", text: "Текст завдання 2" },
    { id: "3", text: "**Задача №2**" },
    { id: "4", text: "**Задача №3**" },
    { id: "5", text: "**Задача №4**" },
  ]
  export const TaskDescription = () => {
    
    const { taskIds} = useParams();
  
    const elem = taskContent.find(item => item.id === taskIds)
  
  console.log('elem', elem)
  console.log('taskId', taskIds)
  
    return (
      <>
      <div>TaskId : {taskIds}</div>
      <div>text: {elem.text}</div>
      </>    
    );
  };