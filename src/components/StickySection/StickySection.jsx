import React, { useEffect, useRef } from 'react';
import './StickySection.css';

const StickySection = ({ id, className, children }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('sticky');
                } else {
                    section.classList.remove('sticky');
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2,
            }
        );

        observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <div id={id} ref={sectionRef} className={` ${className}`}>
            {children}
        </div>
    );
};

export default StickySection;
