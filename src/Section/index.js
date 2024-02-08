import "./style.css";

const Section = ({ title, body, extraHeaderContnent }) => (
    <section className="section">
        <div className="section__form">
            <div className="section__placeButtons">
                <h2 className="section__header ">{title}</h2>
                {extraHeaderContnent}
            </div>
            {body}
        </div>
    </section>

);

export default Section;