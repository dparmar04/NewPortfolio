import React from "react";
import "./ProjectCard.css"; 

export function ProjectCard({ title, subtitle, imageUrl ,icons , link}) {
  

  
  return (
    <div className="card-container"> 
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-description">{subtitle}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="card-image imageDiv">
            <img
              src={imageUrl}
              alt={title}
            />
          </div>
        </a>
        <div className="card-footer">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt="Technology icon" className="tech-icon" />
        ))}
        </div>
      </div>
    </div>
  );
}
