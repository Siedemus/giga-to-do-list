import "./style.css";

const Container = ({ buttons }) => (
    <div className="section__container">
        <h2
            className="section__header section__header--list"
        >
            Lista Zadań
        </h2>
        <div
            className="container__buttons"
        >
            {buttons}
        </div>
    </div>
);

export default Container;