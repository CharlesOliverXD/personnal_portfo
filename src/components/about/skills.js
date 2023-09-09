export default function Skills({ name , value}) {
    return (
        <div className="progress">
            <span className="skill">{name} <i className="val">100%</i></span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
    );
}