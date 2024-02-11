import React, { useState } from 'react'
import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'
import Container from './Container'
import Section from './Section'

function App() {
  const [hideDone, setHideDone] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, content: 'zjeść kiebabu', done: true },
    { id: 2, content: 'ali pomagali', done: false },
  ])

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone)
  }

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id))
  }

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done }
        }

        return task
      }),
    )
  }

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      })),
    )
  }

  return (
    <Container>
      <div className="form__task">
        <header>
          <h1>Lista zadań </h1>
        </header>

        <Section title="Dodaj nowe zadanie" body={<Form />} />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContnent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
        />
      </div>
    </Container>
  )
}

export default App
