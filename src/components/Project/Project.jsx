import React, { useState, useRef , useEffect} from 'react'
import './project.css';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { projects } from './ProjectData.js';
import gsap from 'gsap';


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const projectDisplayRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();


    
    // Create a dynamic and engaging animation
    tl.fromTo(
      projectDisplayRef.current,
      { 
        opacity: 0, 
        scale: 0.8, 
        rotationZ: 90, 
        y: 50, 
        filter: 'blur(10px)' 
      }, // Starting state
      { 
        opacity: 1, 
        scale: 1, 
        rotationZ: 0, 
        delay:0.3,
        y: 0, 
        filter: 'blur(0px)',
        duration: 1.5, 
        // ease: 'bounce.out',
        ease: "elastic.out(1,0.5)",
        transformOrigin: 'right' 
      } // End state
    );
  }, [selectedProject]);


  return (
    <div className="section projects">
      <h1 className='title'>My Projects</h1>
      <div className='project-content'>
        <div className="projects-list">
          {projects.map(project => (
            <div
              key={project.id}
              className={`project-item ${selectedProject.id === project.id ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.name}
            </div>
          ))}
        </div>
        <div className="project-display"  ref={projectDisplayRef}>
          
          <ProjectCard
            title={selectedProject.name}
            subtitle={selectedProject.subtitle}
            imageUrl={selectedProject.imageUrl}
            description={selectedProject.description}
            icons={selectedProject.icons}
            link={selectedProject.link} />
        </div>
      </div>
    </div>
  )
}

export default Project
