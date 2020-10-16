import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const TaskData = [
  {
    message: "Cari Makan",
    id: 1,
  },
  {
    message: "Mandi Sore",
    id: 2,
  },
  {
    message: "Kuliah",
    id: 3,
  },
  {
    message: "Tidur",
    id: 4,
  },
];

const Header = () => {
  return <h1 className="header">Kegiatan Ku</h1>;
};

const InfoBar = ({ taskNumber }) => {
  return (
    <div className="infoBar">
      Aku punya {taskNumber} kegiatan yang harus dikerjakan
    </div>
  );
};

const TaskInput = ({ setTasks, tasks }) => {
  const [currentValue, setCurrentValue] = useState("");

  const taskCreate = () => {
    const newTask = {
      id: tasks.length + 1,
      message: currentValue,
    };

    setTasks([...tasks, newTask]);
    setCurrentValue("");
  };

  return (
    <div id="task-input">
      <TextField
        className="task-field"
        variant="outlined"
        value={currentValue}
        label="Nama Kegiatan"
        onChange={(event) => setCurrentValue(event.target.value)}
      />
      <Button
        className="task-button"
        variant="contained"
        color="primary"
        disabled={currentValue === ""}
        onClick={() => taskCreate()}
      >
        Add
      </Button>
    </div>
  );
};

const Task = ({ message, id, setTasks, tasks }) => {
  const TasksDelete = () => {
    const updatedTasks = tasks.filter((tasks) => tasks.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div class="task-list-container">
      <div className="task-content">
        <h4>{message}</h4>
      </div>
      <div>
        <Button
          className="delete-button"
          variant="contained"
          color="secondary"
          onClick={() => TasksDelete()}
        >
          {" "}
          Delete
        </Button>
      </div>
    </div>
  );
};

const TaskList = ({ tasks, setTasks }) => {
  return tasks.map((task) => {
    return (
      <Task
        message={task.message}
        id={task.id}
        setTasks={setTasks}
        tasks={tasks}
      />
    );
  });
};

const TaskApp = () => {
  const [tasks, setTasks] = useState(TaskData);
  return (
    <>
      <Header></Header>
      <TaskInput setTasks={setTasks} tasks={tasks}></TaskInput>
      <InfoBar taskNumber={tasks.length}></InfoBar>
      <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
    </>
  );
};

const App = () => {
  return (
    <div id="body">
      <div className="task-container">
        <TaskApp></TaskApp>
      </div>
    </div>
  );
};

export default App;
