import React from "react"
import Nav from "../components/nav_bar";

function Header() {
    return (
        <header id="header">
            <div className="container">

                <h1><a href="index.html">Emily Jones</a></h1>
                <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

                <Nav />

                <div className="social-links">
                    <a href="" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

            </div>
        </header>
    );
}

export default Header ;