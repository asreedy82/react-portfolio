import React from 'react';
import gH from '../assets/images/GH-ss.png';
import lI from '../assets/images/LI-ss.png';

const Footer = () => {


    return (
        <div className="container" id='footer'>
            <footer>
                <div className="container text-center">
                    <h4>Anthony Reedy</h4>
                    <p>410-206-2702</p>
                    <p>
                    <a href="mailto:a.reedy@gmail.com">
                        a.reedy@gmail.com
                    </a>
                    </p>
                    <div className="container">
                        <a href="https://github.com/asreedy82" target="_blank">
                            <img className="img-fluid" src={gH} alt="GitHub logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-reedy-0b873027/" target="_blank">
                            <img className="img-fluid" src={lI} alt="LinkedIn logo" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
