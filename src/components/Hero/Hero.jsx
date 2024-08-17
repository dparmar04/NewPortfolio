import React, { useEffect } from 'react'
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './hero.css'


gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Animate the entire h1 element
    gsap.fromTo(
      ".intro h1",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(".intro h1 span", {
      opacity: 0.8,
      text: "(SpiderMan)", // Scramble text (longer text for effect)
    }, {
      text: "Web Developer",
      opacity: 1,
      duration: 2,
      scrambleText: {
        chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", // Characters to use for scrambling
        speed: 0.15, // Scramble speed
        revealDelay: 0.2 // Delay before revealing the actual text
      },
      ease: 'power3.inOut',
      delay: 0.8
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
    <div className='home '>
    <div className='background-gradient-animation'></div>
      <h1 className='title'>Portfolio</h1>
      <div className="section hero">
        <div className='intro '>
          <h1>Hello, Myself Dhruv & <br></br>I'm a <span className='target-region'></span></h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
