export default function Interests( { icon , text}) {
    return (
        <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
                <i className={icon}></i>
                <h3>{text}</h3>
            </div>
        </div>
    );
}