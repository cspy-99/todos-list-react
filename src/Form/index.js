import React, { useState } from 'react'
import './style.css'

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState('')

  const onFormSubmit = (event) => { 
    event.preventDefault();
    if (!newTaskContent.trim()) {
      return;}
    event.preventDefault()
    addNewTask(newTaskContent.trim())
    setNewTaskContent('')
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__addNewTask">
        <input
          value={newTaskContent}
          className="form__entryField"
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <button className="form__newTaskButton">Dodaj zadanie</button>
      </div>
    </form>
  )
}

export default Form
