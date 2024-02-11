import './style.css'

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button onClick={toggleHideDone} className="buttons">
        {hideDone ? 'Pokaż' : 'Ukryj'} ukończone
      </button>
      <button
        onClick={setAllDone}
        className="buttons"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )

export default Buttons
