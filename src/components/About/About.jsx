import {React, useEffect, useRef} from 'react'
import './about.css';
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,    // Trigger when 10% of the image is visible
  });
  const shapeRef = useRef(null);
 const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      gsap.to(shapeRef.current, {
        x: (x - 50) * 0.2, // Adjust these multipliers to control the movement
        y: (y - 50) * 0.2,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    if (inView && textRef.current) {
      // Ensure no duplication in text
      const myText = textRef.current.textContent;
      textRef.current.innerHTML = ''; // Clear existing content

      // Split text into characters and create spans
      const chars = Array.from(myText).map((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        textRef.current.appendChild(span);
        return span;
      });

      gsap.set(textRef.current, { perspective: 400 });

      gsap.from(chars, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        rotationX: 180,
        transformOrigin: '0% 50% -50',
        ease: 'back',
        stagger: 0.02,
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [inView]);

   
  return (
    <div className="section about "  ref={ref}>
   <div class="marquee-container">
      <div className={`marquee ${inView ? 'animate' : ''}`}>
          <h1 class="title">
              <span>About Me</span> |  
              <span class="even"> About Me</span> |  
              <span> About Me</span> | 
              <span class="even"> About Me</span> |  
              <span> About Me</span> | 
              <span class="even"> About Me</span> |  
              <span> About Me</span> |  
              <span class="even"> About Me</span>
          </h1>
      </div>
    </div> 
    <div className={`about-bg ${inView ? 'reveal' : ''}`} >
        <div class="shape"></div>
      <div className='about-content'>
        <h1 className={`typewriter-text ${inView ? 'reveal' : ''}`} ref={textRef}>I’m Dhruv Parmar, a web wizard crafting magic with React and juggling a tech degree. When I’m not fixing bugs, I’m perfecting animations and geeking out over new tech. Want to know more? Let’s connect and build something awesome together!</h1>
        <a className='resume-btn'>Resume</a>
      </div>

      <img ref={shapeRef} src="https://images.unsplash.com/photo-1567282026984-fbad0228317d?w=350" alt="Background" className={`image ${inView ? 'reveal' : ''}`} />
      
    </div>
  </div>
  )
}

export default About