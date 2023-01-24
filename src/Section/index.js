import "./style.css";

const Section = ({ subHeader, form, container, tasksList}) => (
    <section className="section">
        {subHeader}
        {form}
        {container}
        {tasksList}
    </section>
);

export default Section;