import React from 'react';

export default function About() {

  const aboutStyle = {
    padding: "20px",
  }
    return (
        <div>
            <div className="container">
                <h1>About Me</h1>
                <div className="container" style={aboutStyle}>
                    <div className="row">
                        <div className="col-sm">
                            Image here
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
