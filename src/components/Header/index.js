import React from "react";
import { Button } from 'bootstrap';

function Header({ currentPage, handlePageChange }) {

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
                        <a className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} href="#about"
                            onClick={() => handlePageChange('About')}>About Me </a>
                    </li>
                    <li className="nav-item">
                        <a className={currentPage === 'ProjectsContainer' ? 'nav-link active' : 'nav-link'} href="#projects"
                            onClick={() => handlePageChange('ProjectsContainer')}>Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} href="#contact"
                            onClick={() => handlePageChange('Contact')}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} href="#resume"
                            onClick={() => handlePageChange('Resume')}>Résumé</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
