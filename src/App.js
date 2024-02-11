import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Section from "./Section";


const tasks = [
  { id: 1, content: "zjeść kiebabu", done: true },
  { id: 2, content: "ali pomagali", done: false },
];


function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone =>!hideDone);
  };

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
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
          extraHeaderContnent={
          <Buttons
           tasks={tasks}
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone} 
            />
          }
        />
      </div>
    </Container>
  );
}

export default App;
