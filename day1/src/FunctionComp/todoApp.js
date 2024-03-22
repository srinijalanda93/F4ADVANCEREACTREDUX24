import "../styling/todoApp.css";
import { useState } from "react";
export const TodoApp = () => {
  //to maintain thses things we need array
  const [inputValue, setInput] = useState("");
  const [tasks, setTasks] = useState(["coding"]);

  const ChangeInput = (eventObj) => {
    return setInput(eventObj.target.value);
  };
  const addTodo = () => {
    //console.log(inputValue);
    //when we have duplicate tasks
    let found = false;
    tasks.forEach((task) => {
      if (task === inputValue) {
        alert("task already existed");
        found = true;
        setInput("");
      }
    });
    if (!found) {
      setTasks([...tasks, inputValue]);
      setInput("");
    }
  };
   const removeTask=(taskTobeRemoved) =>{
    let remainingTodoArr=tasks.filter((taskelem) =>{ return taskelem!==taskTobeRemoved})
    setTasks(remainingTodoArr);
  }

  return (
    <>
      <div style={{ margin: "20px" }}>
        <h1>To-Do List</h1>
        <div>
          <input
            placeholder="Enter Todo"
            value={inputValue}
            onChange={ChangeInput}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <>
                <li className="task">
                  <span>{task}</span>
                  <button onClick={() => removeTask(task)}>Delete</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};
