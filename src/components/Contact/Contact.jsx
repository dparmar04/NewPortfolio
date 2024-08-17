import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='section contact'>
      <h1 className='title'>Contact</h1>
        <div className='contact-container'>
          <div className='contact-form'>
          <form>
            <div className='form-group'>
              <input type="text" id="fname" name="fname" required placeholder="FIRST NAME" />

              <input type="text" id="lname" name="lname" required placeholder="LAST NAME"/>

            </div>
              
              
              <div className='form-group'>
                <input type="email" id="email" name="email" required placeholder='EMAIL'/>

                <input type="number" id="phone" name="phone" placeholder='CONTACT NUMBER'/>
              </div>
             
              <div className='form-group'>
                <textarea id="msg" name="msg" placeholder='ANY OTHER MESSAGE' rows="4"></textarea>
              </div>
              
              <div className='form-group'>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Contact;
