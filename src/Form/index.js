import "./style.css";

const Form = () => (
    <form className="form">
        <div className="form__addNewTask">
            <input className="form__entryField" placeholder="Co jest do zrobienia?" />
            <button className="form__newTaskButton">Dodaj zadanie</button>
        </div>
    </form>
);

export default Form;