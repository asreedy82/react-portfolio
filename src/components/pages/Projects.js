import React from 'react';
import { Button } from 'bootstrap';

export default function Projects({ handlePageChange }) {

  const projectBoxStyle = {
    padding: "10px",
    border: "solid",
    margin: "4px"
  }

  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Tech Blog</h5>
                    <p className="card-text">A blog site for sharing information/ideas related to coding and technology</p>
                    <a href="#techblog" className="btn btn-primary" onClick={() => handlePageChange('TechBlog')}>View More</a>
                  </div>
              </div>
            </div>
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Weather App</h5>
                    <p className="card-text">A weather application based on city searches</p>
                    <a href="#weatherapp" className="btn btn-primary" onClick={() => handlePageChange('Weather')}>View More</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">JavaScript Quiz</h5>
                    <p className="card-text">A short quiz on basic JavaScript</p>
                    <a href="#" className="btn btn-primary">View More</a>
                  </div>
              </div>
            </div>
            <div className="col" style={projectBoxStyle}>
              2 of 3
            </div>
          </div>
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              1 of 3
            </div>
            <div className="col" style={projectBoxStyle}>
              2 of 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
