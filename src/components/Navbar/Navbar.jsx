import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import Menu from '../../assets/Menu.svg';
import Close from '../../assets/close.svg';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const navItemsRef = useRef([]);


  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        navbarRef.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        navItemsRef.current,
        { y: '-50%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.6,
          stagger: 0.25,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    } else {
      gsap.to(navbarRef.current, { y: '-100%', opacity: 0, duration: 0.5, ease: 'power3.in' });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      gsap.to(".menu-close", {
        x: (x - 50) * 0.2,
        y: (y - 50) * 0.2,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Menu Icon */}
      {!isOpen && (
        <img src={Menu} alt="menu-bar" className="menu-open" onClick={toggleNavbar} />
      )}

      {/* Navbar */}
      {isOpen && (
        <div className='navbar' ref={navbarRef}>
          <img src={Close} alt="close" className='menu-close' onClick={toggleNavbar} />
          <ul className='nav-items'>
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                ref={(el) => (navItemsRef.current[index] = el)}
              >
                <span className='underline'></span>
                {item}
              </a>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
