import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Section from "./Section";


const tasks = [
  { id: 1, content: "zjeść kiebabu", done: true },
  { id: 2, content: "ali pomagali", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <div className="form__task">
        <header>
          <h1>Lista zadań </h1>
        </header>

        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContnent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </div>
    </Container>
  );
}

export default App;
