import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../components/Projects/ProjectData';

const ProjectPage = () => {
  const { id } = useParams(); // This grabs the ":id" from the URL

  // Search the array for the project that matches the ID in the URL
  const project = projectData.find((item) => item.id === id);

  // Fallback in case the user types a wrong URL
  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h2>Project not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <Link to="/" style={backButtonStyle}>← Back to Projects</Link>
      
      <div style={contentWrapper}>
        <img src={project.image} alt={project.title} style={imageStyle} />
        
        <h1>{project.title}</h1>
        
        <div style={tagContainer}>
          {project.technologies.map((tech, index) => (
            <span key={index} style={tagStyle}>{tech}</span>
          ))}
        </div>

        <p style={descStyle}>{project.description}</p>
      </div>
    </div>
  );
};

// Simple Styles for layout
const pageStyle = { padding: '40px', maxWidth: '1000px', margin: '0 auto' };
const imageStyle = { width: '100%', height: 'auto', borderRadius: '20px', marginBottom: '30px' };
const tagStyle = { background: '#eee', padding: '5px 12px', borderRadius: '20px', marginRight: '10px', fontSize: '14px' };
const backButtonStyle = { textDecoration: 'none', color: '#666', marginBottom: '20px', display: 'block' };

export default ProjectPage;