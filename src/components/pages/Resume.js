import React from 'react';
//import resumePdf from '../assets/images/Anthony_Reedy_resume.pdf';

export default function Resume() {

  /*  function downloadPDF() {
     const blob = new Blob([resumePdf], { type: 'application/pdf' });
     const url = URL.createObjectURL(blob);
     const link = document.createElement('a');
     link.href = url;
     link.download = 'Anthony_Reedy_Resume.pdf';
     link.click();
   }
  */


  return (
    <div>
      <div className="container">
        <h1>Resume</h1>
        <h5>Technologies</h5>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>SQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node</li>
          <li>Express</li>
          <li>HandleBars</li>
        </ul>
        <h5>Work Experience</h5>
        <ul>
          <li><b>Data Solutions Engineer</b> at Camelot Strategic Marketing and Media</li>
          <li><b>Senior Manager</b> Verizon Media</li>
          <li><b>Senior Director of Operations Engineering</b> at Millennial Media</li>
          <li><b>Business Analyst</b> at AOL</li>
          <li><b>Program Analyst</b> at The Federal Aviation Administration</li>
        </ul>
        <p>
          
          {/* <div>
            <button type="button" class="btn btn-primary" onClick={downloadPDF}>Download My Resume</button>
          </div> */}
        </p>
      </div>
    </div>
  );
}
