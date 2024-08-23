import React, { useEffect, useRef } from 'react';

const BackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let maxx = document.body.clientWidth;
    let maxy = document.body.clientHeight;
    const halfx = maxx / 2;
    const halfy = maxy / 2;
    const dotCount = 200;
    const dots = [];

    // Set canvas size
    canvas.width = maxx;
    canvas.height = maxy;

    // Dot class
    class Dot {
      constructor() {
        this.rad_x = 2 * Math.random() * halfx + 1;
        this.rad_y = 1.2 * Math.random() * halfy + 1;
        this.alpha = Math.random() * 360 + 1;
        this.speed = Math.random() * 100 < 50 ? 1 : -1;
        this.speed *= 0.1;
        this.size = Math.random() * 5 + 1;
        this.color = Math.floor(Math.random() * 256);
      }

      draw() {
        const dx = halfx + this.rad_x * Math.cos((this.alpha / 180) * Math.PI);
        const dy = halfy + this.rad_y * Math.sin((this.alpha / 180) * Math.PI);
        context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
        context.fillRect(dx, dy, this.size, this.size);
      }

      move() {
        this.alpha += this.speed;
        if (Math.random() * 100 < 50) {
          this.color += 1;
        } else {
          this.color -= 1;
        }
      }
    }

    // Create dots
    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    // Animation loop
    const render = () => {
      context.fillStyle = '#5fa8d3';
      context.fillRect(0, 0, maxx, maxy);
      dots.forEach(dot => {
        dot.draw();
        dot.move();
      });
      requestAnimationFrame(render);
    };

    render();

    // Handle window resize
    const handleResize = () => {
      maxx = document.body.clientWidth;
      maxy = document.body.clientHeight;
      canvas.width = maxx;
      canvas.height = maxy;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default BackgroundAnimation;
