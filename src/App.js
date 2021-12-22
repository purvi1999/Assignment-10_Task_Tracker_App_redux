import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "./component/Header.js";
import Tasks from "./component/Tasks.js";
import Add_task from "./component/Add_task.js";
import Footer from "./component/Footer.js";
import About from "./component/About.js";
import Login from "./component/Login.js";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Tasks1",
      day: "meeting 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Task2",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Task3",
      day: "Feb 5th at 2:30pm",
      reminder: false
    }
  ]);

  //Add task -
  const add_task = async (task) => {
    console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  //delete task -
  const delete_task = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggle = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    //<div className="container" style={{color:'red'}}>
    <Router>
      {isLogged || <Login />}
      {isLogged && (
        <div className="container">
          <Header onAdd={() => setShowTask(!showTask)} showAddTask={showTask} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showTask && <Add_task add_task={add_task} />}

                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={delete_task}
                      onToggle={toggle}
                    />
                  ) : (
                    <p>No Task Avaiable</p>
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
