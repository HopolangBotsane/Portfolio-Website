import { projectData } from "../components/Projects/ProjectData";
import { Link } from "react-router-dom"

const ContactPage = () => {

// const cards = [
//   { id: 1, text: "Card One", path: "/project/", top: '15%', left: '10%', rotation: '-5deg' },
//   { id: 2, text: "Card Two", path: "/project/", top: '12%', left: '72%', rotation: '8deg' },
//   { id: 3, text: "Card Three", path: "/project/", top: '65%', left: '18%', rotation: '-3deg' },
//   { id: 4, text: "Card Four", path: "/project/", top: '78%', left: '75%', rotation: '12deg' },
//   { id: 5, text: "Card Five", path: "/project/", top: '48%', left: '82%', rotation: '-7deg' },
// ];

  // Styles
  const containerStyle = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const heroStyle = {
    maxWidth: '600px',
    textAlign: 'center',
    zIndex: 2, // Keeps text above cards if they overlap
  };

  const cardStyle = {
    position: 'absolute',
    width: '180px',
    padding: '20px',
    background: '#f8f9fa',
    border: '1px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <h1 style={{ fontSize: '2.5rem' }}>
         To Create With Abstraction
        </h1>
      </div>

      {projectData.map((project) => (
        <Link 
          key={project.id} 
          to={`/project/${project.id}`} // Links to the dynamic route
          style={{
            ...cardStyle, 
            top: project.top, 
            left: project.left,
            transform: `translate(-50%, -50%) rotate(${project.rotation})`
          }}
          className="portfolio-card"
        >
          <h3>{project.title}</h3>
          <p>View Case Study</p>
        </Link>
      ))}
    </div>
  );
};

export default ContactPage
