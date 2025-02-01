import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagramSquare, FaInstagram } from 'react-icons/fa';
import '/src/Contact.css';
import { FaInstalod } from 'react-icons/fa6';

const Contact = () => {
  // Social media platforms data
  const socialMedia = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      link: 'https://github.com/Mandeep210405',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/mandeep-jadeja-50aa7a2b5',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram/>,
      link: 'https://Instagram.com/Jadeja_6212',
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      link: 'mailto:Mandeep210405@gmail.com',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get in Touch</h2>

        {/* Social Media Cards */}
        <div className="social-cards">
          {socialMedia.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card blur-card"
            >
              <div className="social-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="btn-send">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;