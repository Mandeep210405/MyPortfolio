import React from 'react';
import '/src/Testimonials.css';

const Testimonials = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>All rights reserved &copy; {new Date().getFullYear()} Mandeep Jadeja</p>
      </div>
    </footer>
  );
};

export default Testimonials;