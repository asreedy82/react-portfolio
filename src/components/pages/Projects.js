import React, { useState, useEffect } from 'react';
import { Button } from 'bootstrap';
import techBlogImage from '../assets/images/tech-blog-ss.png';
import weatherImage from '../assets/images/weather-app-ss2.png';
import matchMyMood from '../assets/images/match-my-mood-ss.png'
import noteImage from '../assets/images/note-taker-ss.png';
import textImage from '../assets/images/JATE-ss.png';
import sauceImage from '../assets/images/03-Secretsaucelogo.png';

export default function Projects({ handlePageChange }) {

  const projectBoxStyle = {
    padding: "10px",
    margin: "4px"
  }

  const buttonStyle = {
    margin: "3px"
  }

  return (
    <div>
      <div className="container">
        <h1>Projects</h1>
        <div className="container">
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Tech Blog</h5>
                <img className="card-img-top" src={techBlogImage} alt="Screenshot of tech blog featuring a couple blog posts"/>
                  <div className="card-body">
                    <p className="card-text">A blog site for sharing information/ideas related to coding and technology</p>
                    <a href="https://fathomless-lake-63055.herokuapp.com/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('TechBlog')}>View App</a>
                    <a href="https://github.com/asreedy82/tech-blog" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('TechBlog')}>GitHub</a>
                  </div>
              </div>
            </div>
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Weather App</h5>
                <img className="card-img-top" src={weatherImage} alt="Screenshot of weather app featuring weather forecast from Toronto"/>
                  <div className="card-body">
                    <p className="card-text">A weather application based on city searches</p>
                    <a href="https://asreedy82.github.io/weather-dashboard-challenge/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('Weather')}>View App</a>
                    <a href="https://github.com/asreedy82/weather-dashboard-challenge" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('Weather')}>GitHub</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Match My Mood</h5>
                <img className="card-img-top" src={matchMyMood} alt="Screenshot of MERN project for Match My Mood app featuring moods"/>
                  <div className="card-body">
                    <p className="card-text">An app to match music to your mood</p>
                    <a href="https://salty-fjord-43236.herokuapp.com/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('Quiz')}>View App</a>
                    <a href="https://github.com/bobascript/Match-My-Mood" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('Quiz')}>GitHub</a>
                  </div>
              </div>
            </div>
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Note Taker App</h5>
                <img className="card-img-top" src={noteImage} alt="Screenshot of note taker app with 2 notes saved"/>
                  <div className="card-body">
                    <p className="card-text">An application where you can create and delete notes.</p>
                    <a href="https://serene-eyrie-98195.herokuapp.com/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('NoteTaker')}>View App</a>
                    <a href="https://github.com/asreedy82/note-taker-challenge" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('NoteTaker')}>GitHub</a>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Text Editor Progressive Web App</h5>
                <img className="card-img-top" src={textImage} alt="Screenshot of text editor app with javascript snippets written"/>
                  <div className="card-body">
                    <p className="card-text">A text editor application that works even when offline</p>
                    <a href="https://stark-ridge-36854.herokuapp.com/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('TextEditor')}>View App</a>
                    <a href="https://github.com/asreedy82/text-editor-pwa" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('TextEditor')}>GitHub</a>
                  </div>
              </div>
            </div>
            <div className="col" style={projectBoxStyle}>
              <div className="card" style={{width: "35rem"}}>
                    <h5 className="card-title">Secret Sauce</h5>
                <img className="card-img-top" src={sauceImage} alt="Secret Sauce logo image"/>
                  <div className="card-body">
                    <p className="card-text">A recipe application to share your family's secret recipes</p>
                    <a href="https://damp-river-14558.herokuapp.com/" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('SecretSauce')}>View App</a>
                    <a href="https://github.com/graciaan/SecretSauce" target="_blank" className="btn btn-primary" style={buttonStyle} onClick={() => handlePageChange('SecretSauce')}>GitHub</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
