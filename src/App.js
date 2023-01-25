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

const hideDone = false;

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
            hideDone={hideDone}
          />}
        />}
        tasksList={<Tasks tasks={tasks} hideDone={hideDone} />}
      />
    </div>
  );
}

export default App;
