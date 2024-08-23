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
      { y: '-100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
      }
    );
    
    // Animate the entire h1 element
    gsap.fromTo(
      ".intro h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(".title" , {
      y:-100,
      opacity:0
    }, 
    {
      y:0,
      opacity:1,
      duration:0.8,
    })

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
    <div className='background-gradient-animation'>
      {/* <video  className='video-bg' loop autoPlay muted>
        <source src="https://cdn.pixabay.com/video/2016/09/13/5091-182666928_large.mp4" type="video/mp4" />
      </video> */}
    </div>
      <div className="section hero">
        <h1 className='title'>Portfolio</h1>
        <div className='intro '>
          <h1>Hello, Myself Dhruv & <br></br>I'm a <span className='target-region'></span></h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
