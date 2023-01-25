import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const [focusField, setFocusField] = useState(false);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent === "") {
            return setFocusField(focusField => !focusField);
        }
        addNewTask(newTaskContent)
        setNewTaskContent("")
    };

    return (
        <form
            onSubmit={onFormSubmit}
            className="form" >
            <input
                focus={focusField}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </form >
    )
};

export default Form;
