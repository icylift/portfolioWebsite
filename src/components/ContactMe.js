import React from 'react';
import '../App.css';


function ContactMe(){
  return(
    <div>
      <div className='ContactDiv'>
        <h1>Contact Me</h1>
        <form className='contactForm'>


          <input 
          type="text"
          name='firstName'
          id='firstName'
          placeholder='first-name'
          />


          <input 
          type="text"
          name='lastName'
          id='lastName'
          placeholder='last-name'
          />


          <input 
            type="email"
            name='emailInput'
            id='emailInput'
            placeholder='Email'

          />



          <input 
          type="text"
          name='companyName'
          id='companyName'
          placeholder='Company-Name'
          />

          <label for="description" id='descriptionLabel'>Tell me how I can help you:</label>
          <textarea id="description" name="description" rows="4" cols="50">
          Enter Project details here...
          </textarea>


          <button className='contactButton' id='contactButton'>Submit</button>
        </form>
      </div>
    </div>
  )
}






export default ContactMe