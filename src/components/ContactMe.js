import React from 'react';
import '../App.css';


function ContactMe(){
  return(
    <div>
      <div className='ContactDiv'>
        <h1>Contact Form</h1>
        <form>
          <input type="text"/>
          <input type="text"/>
          <input type="text"/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}






export default ContactMe