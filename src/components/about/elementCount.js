export default function ElementCount( {icon , text, purecounterend} ) {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="count-box">
                <i className={icon}></i>
                <span data-purecounter-start="0" data-purecounter-end={purecounterend} data-purecounter-duration="1"
                    className="purecounter"></span>
                <p>{text} </p>
            </div>
        </div>
    );
}

