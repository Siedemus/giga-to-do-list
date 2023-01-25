import "./style.css";

const Buttons = ({ tasks, hideDone, setAllDone }) => (
    tasks.length > 0 && (
        <>
            <button className="container__button">
                {hideDone ? "Pokaż " : "Ukryj "}ukończone
            </button>
            <button
                onClick={setAllDone}
                className="container__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </>
    )
);

export default Buttons;