import { useState, useEffect } from "react";


const TodoList = () => {
    const [input, setInput] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const localTask = localStorage.getItem("listTasks");
    if (localTask) {
      setListTasks(JSON.parse(localTask));
    }
  }, []);

  

  const handleCheck = (index) => {
    const newListTasks = [...listTasks];
    newListTasks[index].completed = !newListTasks[index].completed;
    setListTasks(newListTasks);

    const newCompletedTasks = newListTasks.filter((task) => task.completed)
      .length;
    setCompleted(newCompletedTasks);

    localStorage.setItem("listTasks", JSON.stringify(newListTasks));
  };

  const handleSubmit = () => {
    const newListTasks = [...listTasks, { task: input, completed: false }];
    setListTasks(newListTasks);
    setInput("");

    localStorage.setItem("listTasks", JSON.stringify(newListTasks));
  };

  return (
    <div className>
      <div className="box">
       
        <div className="list-task">
          {listTasks.map((task, index) => (
            <div key={index} className={task.completed?'todo-item-container done':"todo-item-container"}>
              <input type="checkbox" onClick={() => handleCheck(index)} checked={task.completed} />
              <span style={{marginLeft:'10px'}}>{task.task}</span>
            </div>
          ))}
        </div>
        
        <form className="form">
        <input value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter task ..."/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
  );
};

export default TodoList;
