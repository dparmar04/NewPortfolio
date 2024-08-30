import React, { useEffect } from 'react'
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundAnimation from '../BackgroundAnimation';
import './hero.css'


gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
  
  useEffect(() => {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.innerHTML = '';

    // Split text into spans
    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      title.appendChild(span);
    });

    // GSAP animation
    gsap.fromTo(
      '.title span',
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
    
    // Animate the entire h1 element
    gsap.fromTo(
      ".intro h1",
      { x: 500, opacity: 0 , duration:2},
      { x: 0, opacity: 1, duration: 2, ease: 'power3.out'}
    );

    gsap.fromTo(".title" , {
      y:-100,
      opacity:0,
    }, 
    {
      y:0,
      opacity:1,
      duration:0.8,
      ease: "bounce.out",
    })


    //Scramble Text
    gsap.fromTo(".intro h1 span", {
      opacity: 1,
      text: "(SpiderMan)", // Scramble text (longer text for effect)
    }, {
      text: "Web Developer",
      opacity: 1,
      duration: 2,
      scrambleText: {
        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // Characters to use for scrambling
        speed: 0.15, // Scramble speed
        revealDelay: 0.5 // Delay before revealing the actual text
      },
      ease: 'power3.inOut',
      delay: 1
    });

    // Scroll-triggered animation
    gsap.fromTo(
      ".intro h1",
      { scale: 1.8, opacity: 1 },
      {
        scale: 0.8,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ".intro",
          start: "top center", // Animation starts when the top of the trigger element reaches the center of the viewport
          end: "bottom top", // Animation ends when the bottom of the trigger element reaches the top of the viewport
          scrub: 2, // Scrub the animation based on scroll position
        }
      }
    );




  }, []);

  return (
    <div className='home head-home'>
      <BackgroundAnimation/>
      <div className="section hero">
      <div className='logo'>   
      <svg width="107" height="119" viewBox="0 0 107 119" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 118.169V0.169098H16.5C19.6667 1.1691 28 3.9691 36 7.1691C46 11.1691 57 18.6691 57 22.6691C57 26.6691 50 30.1691 39.5 40.1691C31.1 48.1691 29 58.5 29 62.5C28 65.5 30 83.1691 29.5 89.6691C29.1 94.8691 23.6667 100.502 20.5 102.669C44.5 92.1691 57 87 70.5 73C81 56 78 45 72 34C66 23 51 13 49 12C49 12 40.5 7.00243 36 5.1691C34.5 4.6691 25 1.33576 21 0.169098C30.1667 -0.164236 50.8 -0.230902 60 2.1691C69.2 4.5691 74.1667 7.1691 75.5 8.1691C87.5 14.5 94.5 21 98.5 28C102.5 35 102.5 35.5 106 50L106.5 55V59V64L106 68.1691C106 72 103.8 81.7691 97 92.1691C90.2 102.569 80 109.5 75.5 111.5C70.3 115.1 56.3333 117.667 50.5 118.5L0 118.169Z" fill="white"/>
      </svg>
      </div>
        <h1 className='title'>Portfolio</h1>
        <div className='intro '>
          <h1>Hello, Myself Dhruv & <br></br>I'm a <span className='target-region'></span></h1>
          {/* <h1>Crafting High Performance Website</h1> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
