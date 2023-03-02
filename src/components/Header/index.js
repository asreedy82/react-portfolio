import React from "react";
import { Button } from 'bootstrap';

const Header = () => {

    const navbarStyle = {
        padding: "20px",
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navbarStyle}>
            <a className="navbar-brand">Anthony Reedy</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Me </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Résumé</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
