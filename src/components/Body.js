import React from "react";
import "../App.css";

function Body() {
  return (
    <div className="body">
      <div className="greetingDiv">
        <div className="content">
          <div className="bigGreeting">
            Hello My name is <span>Aaron</span> ,
          </div>
          <p>
            <br /> I am a dedicated and driven individual who is eager to prove
            my worth through hard work and a strong work ethic. I am constantly
            seeking new challenges to push my skills to the limit, and I have a
            deep passion for technology and building visually stunning projects.
            My commitment to excellence and attention to detail ensures that
            every project I work on is of the highest quality, and I take pride
            in delivering exceptional results that exceed my clients'
            expectations.
          </p>
        </div>
      </div>
      <div className="centerContactButtonDiv">
        <button className="centerContactBtn">
          <span>Contact</span>
        </button>
      </div>

      <div className="skillsDiv">
        <h1 className="skillsTitle">Skills</h1>
        <div className="skillListDiv">
          <ul className="skillList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>react</li>
          </ul>
          <ul className="skillList2">
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git / Git Hub</li>
            <li>Agile / Scrum</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
