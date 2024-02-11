import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="buttons"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;