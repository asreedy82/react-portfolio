import React from 'react';

export default function Contact() {

  const contactStyle = {
    padding: "20px",
  }

  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <form>
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlInput1">Name</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name here"/>
          </div>
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlInput1">Email Address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div class="form-group" style={contactStyle}>
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
