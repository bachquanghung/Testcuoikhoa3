import { useState, useEffect } from "react";


const TodoList = () => {
  const [input, setInput] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0); 
  const [language, setLanguage ] =useState(false)

  useEffect(() => {
    const taskLocal = localStorage.getItem("listTasks");
    if (taskLocal) {
      setListTasks(JSON.parse(taskLocal));
    }
  }, []);
const Change=()=>{
  setLanguage(language===false?true:false)
}
  const handleSubmit = () => {
    const newListTasks = [...listTasks, { task: input, completed: false }];
    setListTasks(newListTasks);
    setInput("");

    localStorage.setItem("listTasks", JSON.stringify(newListTasks));
  };

  const handleCheckboxClick = (index) => {
    const newListTasks = [...listTasks];
    newListTasks[index].completed = !newListTasks[index].completed;
    setListTasks(newListTasks);

    const newCompletedTasks = newListTasks.filter(
      (task) => task.completed
    ).length;
    setCompletedTasks(newCompletedTasks);

    localStorage.setItem("listTasks", JSON.stringify(newListTasks));
  };

  return (
   <>
   {!language?( <div className="wrapper">
      <button className="language" onClick={Change}>Change language</button>
      <div className="box">
        <div className="tasks">
          You have {listTasks.length - completedTasks} tasks left!
        </div>
        <div className="list-task">
          {listTasks.map((listTask, index) => (
            <div
              key={index}
              className={`task ${listTask.completed && "completed"}`}
            >
              <input
                type="checkbox"
                onClick={() => handleCheckboxClick(index)}
                checked={listTask.completed}
              />
              <span>{listTask.task}</span>
            </div>
          ))}
        </div>
        <div className="input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter task ..."
          />
          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
        </div>
      </div>
    </div>):( <div className="wrapper">
      <button className="language" onClick={Change}>Đổi ngôn ngữ</button>
      <div className="box">
        <div className="tasks">
         Bạn có {listTasks.length - completedTasks} nhiệm vụ!
        </div>
        <div className="list-task">
          {listTasks.map((listTask, index) => (
            <div
              key={index}
              className={`task ${listTask.completed && "completed"}`}
            >
              <input
                type="checkbox"
                onClick={() => handleCheckboxClick(index)}
                checked={listTask.completed}
              />
              <span>{listTask.task}</span>
            </div>
          ))}
        </div>
        <div className="input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Thiết lập nhiệm vụ ..."
          />
          <button onClick={handleSubmit} className="submit">
            Thiết lập
          </button>
        </div>
      </div>
    </div>)}
   </>
  );
};

export default TodoList;
