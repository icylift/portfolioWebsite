import React from 'react';
import '../App.css';


function Body(){
  return(
    <div>
      <div className='content'>
        <div className='bigGreeting'>Hello</div>
        <p>
          My name is Aaron, 
        </p>
      </div>
      
      <div className='resumePortfolioButtons'>
        <button>Resume</button>
        <button>Portfolio</button>
      </div>

      <div className='skillsDiv'>
        <h1 className='skillsTitle'>Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>react</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Git/ Git Hub</li>
        </ul>

      </div>
    </div>
  )
}






export default Body 