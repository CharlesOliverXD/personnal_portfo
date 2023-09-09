export default function ServicesElement( {title, description, icon}) {
    return (

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
                <div className="icon"><i className={icon}></i></div>
                <h4><a href="">{title}</a></h4>
                <p>{description}</p>
            </div>
        </div>
    );
}