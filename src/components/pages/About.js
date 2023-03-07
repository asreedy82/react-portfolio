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
                        <div className="col-sm">
                            <div class="container" style={{ maxWidth: '800px', maxHeight: '600px' }}>
                            <img src={aboutImage} style={{ width: "50%"}} alt="Picture of Anthony Reedy"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={aboutStyle}>
                    <div className="row">
                        <div className="col-sm">
                            <p>I'm a Coding Bootcamp student looking for a career in web application development.
                                On this page, you'll find my contact info as well as links to examples of my work.
                                Thanks for stopping by!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
