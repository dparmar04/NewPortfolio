import React, { useEffect } from 'react';
import './cursor.css';
import gsap from 'gsap';

const Cursor = () => {
  useEffect(() => {
    const cursorDot = document.querySelector('#cursorDot');
    const cursorRing = document.querySelector('#cursorRing');
    const imageDiv = document.querySelector('.imageDiv'); // Your target div


    // Update cursor position
    const updateCursor = (e) => {
      const offsetX = 0; // Adjust this value to fine-tune horizontal position
      const offsetY = 0; // Adjust this value to fine-tune vertical position

      // Dot follows the cursor exactly
      gsap.to(cursorDot, {
        x:e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0, 
        ease: 'power2.out',
      });

      // Ring has a slight delay to create the trailing effect
      gsap.to(cursorRing, {
        x:  e.clientX + offsetX,
        y: e.clientY + offsetY,
        duration: 0.5, // Slower movement for the ring
        ease: 'power2.out',
      });
    };

    // Handle mouse enter
    const handleMouseEnter = () => {
      cursorRing.innerHTML = "Click!";
      gsap.to(cursorRing, {
        scale: 5,
        duration: 0.3,
        fontSize: 8,
        backgroundColor: 'black',
        border:0,
        color:"white",
      });
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      cursorRing.innerHTML = "";
      gsap.to(cursorRing, {
        scale: 1,
        duration: 0.3,
        backgroundColor: 'transparent',
        borderWidth: '1px',
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    if (imageDiv) {
      imageDiv.addEventListener('mouseenter', handleMouseEnter);
      imageDiv.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('mousemove', updateCursor);
      if (imageDiv) {
        imageDiv.removeEventListener('mouseenter', handleMouseEnter);
        imageDiv.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div id="cursorDot"></div>
      <div id="cursorRing"></div>
    </>
  );
};

export default Cursor;
