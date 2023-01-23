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
          placeholder='first-name'
          />


          <input 
          type="text"
          name='lastName'
          placeholder='last-name'
          />


          <input 
            type="email"
            name='emailInput'
            placeholder='Email'

          />



          <input 
          type="text"
          name='companyName'
          placeholder='Company-Name'
          />

          <label for="description">Tell me how I can help you:</label>
          <textarea id="description" name="description" rows="4" cols="50">
          Enter Project details here...
          </textarea>


          <button className='contactButton'>Submit</button>
        </form>
      </div>
    </div>
  )
}






export default ContactMe