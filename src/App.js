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

  return (
    <div className="App">
      <Header />
      <Section
        subHeader={<SubHeader />}
        form={<Form />}
      />
      <Section
        container={<Container
          buttons={<Buttons
            tasks={tasks}
            hideDone={hideDone}
          />}
        />}
        tasksList={<Tasks
          tasks={tasks}
          hideDone={hideDone}
          toggleTaskDone={toggleTaskDone}
        />}
      />
    </div>
  );
}

export default App;
