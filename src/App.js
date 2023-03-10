import Header from "./Header";
import SubHeader from "./SubHeader";
import Section from "./Section";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import Tasks from "./Tasks";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejść na reacta", done: true },
    { id: 2, content: "Zjeść śniadanie", done: true },
  ]);

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      };

      return task;
    }))
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      {
        content: content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1
      },
      ...tasks
    ]);
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  return (
    <div className="App">
      <Header />
      <Section
        subHeader={<SubHeader />}
        form={<Form
          addNewTask={addNewTask}
        />}
      />
      <Section
        container={<Container
          buttons={<Buttons
            tasks={tasks}
            hideDone={hideDone}
            setAllDone={setAllDone}
            toggleHideDone={toggleHideDone}
          />}
        />}
        tasksList={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          toggleTaskDone={toggleTaskDone}
          removeTask={removeTask}
        />}
      />
    </div>
  );
}

export default App;
