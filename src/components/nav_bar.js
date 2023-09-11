import {Link} from "react-scroll" ;

function Nav() {
    return (
        <nav id="navbar" className="navbar">
            {/* <ul>
                <li><a className="nav-link active" href="">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#resume">Resume</a></li>
                <li><a className="nav-link" href="#services">Services</a></li>
                <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul> */}

            <ul>
                <li> <Link to="header" className="nav-link active">Home</Link> </li>
                <li> <Link to="about" className="nav-link">About</Link> </li>
                <li> <Link to="resume" className="nav-link">Resume</Link> </li>
                <li> <Link to="services" className="nav-link">Services</Link> </li>
                <li> <Link to="portfolio" className="nav-link">Portfolio</Link> </li>
                <li> <Link to="contact" className="nav-link">Contact</Link> </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    );
}

export default Nav