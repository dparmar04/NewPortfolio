import React, { useState, useRef, useEffect } from 'react';
import './contact.css';
import '../../index.css'
import GithubIcon from '../../assets/github.png';
import LinkedIn from '../../assets/linkedin.png';
import gsap from 'gsap';

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
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className='section contact' ref={contactBgRef}>
 
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>


      <h1 className='title'>Contact Me</h1>
      <div className='contact-container'>
        <div className='contact-form'>
          <form name='portfolio' method='POST' action='https://script.google.com/macros/s/AKfycbygM_9ME6zB5OLv_96F1CTBJCEs79Mgg3Hn2GnLvAcO9ugElOCD6CuEoOg6VbJFXOMtAA/exec'>
            <div className='form-group'>
              <input type="text" id="fname" name="fname" required placeholder="FIRST NAME" />
              <input type="text" id="lname" name="lname" required placeholder="LAST NAME" />
            </div>
            <div className='form-group'>
              <input type="email" id="email" name="email" required placeholder='EMAIL' />
              <input type="number" id="phone" name="phone" placeholder='CONTACT NUMBER' />
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
        <div className='end'>
          <a href="https://github.com/dparmar04" target='_blank'>
            <img src={GithubIcon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/dhruv-parmar-459289255" target='_blank'>
            <img src={LinkedIn} alt="" /> 
          </a>
          <p>Made by dhruv parmar</p>
        </div>
    </div>
  );
};

export default Contact;