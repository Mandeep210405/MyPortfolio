// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import '/src/Navbar.css'; // Import Navbar CSS

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">Mandeep Jadeja</div>
//         <div className={`nav-links ${isOpen ? 'active' : ''}`}>
//           <a href="#home">Home</a>
//           <a href="#skills">Skills</a>
//           <a href="#experience">Education</a>
//           <a href="#contact">Contact</a>
//           <button className="btn-hire">Hire Me</button>
//         </div>
//         <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
//           <FaBars />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '/src/Navbar.css'; // Import Navbar CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle "Hire Me" button click
  const handleHireMeClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">𝗠𝗮𝗻𝗱𝗲𝗲𝗽 𝗝𝗮𝗱𝗲𝗷𝗮</div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Education</a>
          <a href="#contact">Contact</a>
          <button className="btn-hire" onClick={handleHireMeClick}>
            Let's talk!!
          </button>
        </div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;