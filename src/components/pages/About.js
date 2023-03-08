import React from 'react';
import aboutImage from '../assets/images/camelot_reedy-anthony-1.jpeg';

export default function About() {

    const aboutStyle = {
        padding: "20px",
    }
    const imageBox = {

    }

    return (
        <div>
            <div className="container">
                <h1>About Me</h1>
                <div className="container" style={aboutStyle}>
                    <div className="row">
                        <div className="container" style={{ maxWidth: '800px', maxHeight: '600px' }}>
                            <img src={aboutImage} className="img-fluid float-start" style={{ width: "50%" }} alt="Picture of Anthony Reedy" />
                        </div>
                    </div>
                </div>
                <div className="container" style={aboutStyle}>
                    <div className="row">
                        <div className="col-sm">
                            <p>Welcome to my portfolio! I'm currently a Coding Bootcamp student working towards a certificate in Full Stack Web Development. Within this portfolio, you'll find several examples of my work with links each project's GitHub repo. I've also included contact information, my résumé, and a contact form.
                                Thanks for stopping by!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
