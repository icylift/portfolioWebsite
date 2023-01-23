import React from 'react';
import '../App.css';


function Body(){
  return(
    <div className='body'>
      <div className='greetingDiv'>
        <div className='content'>
          <div className='bigGreeting'>Hello</div>
            <p>
              My name is Aaron, 
            </p>
        </div>
      </div>
      <div className='resumePortfolioButtons'>
        <button>Contact</button>
      </div>

      <div className='skillsDiv'>
        <h1 className='skillsTitle'>Skills</h1>
        <div className='skillListDiv'>
          <ul className='skillList'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>react</li>
          </ul>
          <ul className='skillList2'>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Git / Git Hub</li>
            <li>Agile / Scrum</li>
          </ul>
        </div>
      </div>
    </div>
  )
}






export default Body 