import React, { useState } from 'react';


import { validateEmail } from '../../utils/helper';

export default function Contact() {

  const contactStyle = {
    padding: "20px",
  }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState("");

  const handleBlurName = () => {
    if (name.trim() === "") {
      alert("Please enter your name!")
    } 
  };

  const handleBlurEmail = () => {
    if (email.trim() === "") {
      alert("Please enter your email!")
    } 
  };

  const handleBlurMessage = () => {
    if (message.trim() === "") {
      alert("Please enter a message!")
    } 
  };


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Not a valid email');
      return;

    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <form>
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlInput1">Name</label>
            <input
              value={name}
              onBlur={handleBlurName}
              name='name'
              onChange={handleInputChange}
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name here" />
          </div>
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlInput1">Email Address</label>
            <input
              value={email}
              onBlur={handleBlurEmail}
              name='email'
              onChange={handleInputChange}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com" />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea 
              value={message}
              onBlur={handleBlurMessage}
              name='message'
              onChange={handleInputChange}
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3">
              </textarea>
          </div>
          <button type="button" class="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}
