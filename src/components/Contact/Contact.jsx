import React, {useEffect, useRef} from 'react';
import './contact.css';
import gsap from 'gsap'

const Contact = () => {
  const contactBgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      gsap.to(contactBgRef.current, {
        backgroundPosition: `${x}% ${y}%`,
        ease: 'power2.out',
         duration: 1,
        delay:0.3,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

   
  return (
    <div className='section contact' ref={contactBgRef}>
      <h1 className='title'>Contact</h1>
        <div className='contact-container'>
           <div className='contact-form'>
              
              
          <form  method="post" action='https://script.google.com/macros/s/AKfycbwkJq70X23UrLY2ln8pA16EEKN-WRDz9uQa7DPj8bfEBgrotsiOy-v3oEOgGmFmOdDeCA/exec'>
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
