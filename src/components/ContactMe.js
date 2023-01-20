import React from 'react';
import '../App.css';


function ContactMe(){
  return(
    <div>
      <div className='ContactDiv'>
        <h1>Contact Form</h1>
        <form className='contactForm'>
          <h3>Full name</h3>
          <input type="text"/>
          <h3>Email</h3>
          <input type="text"/>
          <h3>Phone Contact</h3>
          <input type="text"/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}






export default ContactMe