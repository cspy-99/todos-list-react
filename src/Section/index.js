const Section = ({ title, body, extraHeaderContnent }) => (
    <section className="section">
        <div className="form__section">
            <div className="form__placeButtons">
                <h2 className="form__header ">{title}</h2>
                {extraHeaderContnent}
            </div>
            {body}
        </div>
    </section>

);

export default Section;