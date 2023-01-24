import Header from "./Header";
import SubHeader from "./SubHeader";
import Section from "./Section";
import Form from "./Form";
import Container from "./Container";
import Buttons from "./Buttons";
import Tasks from "./Tasks";

const tasks = [
  { id: 1, content: "Przejść na reacta", done: true },
  { id: 2, content: "Zjeść śniadanie", done: true },
];

const toggleHideDone = false;

function App() {
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
            hideDone={toggleHideDone}
          />}
        />}
        tasksList={<Tasks tasks={tasks} hideDone={toggleHideDone} />}
      />
    </div>
  );
}

export default App;
