import React from 'react';
import { Carousel } from 'react-bootstrap';
import '/src/Experience.css';

const Education = () => {
  const experiences = [
    {
      title: '10th-SSC',
      company: 'Shree Swaminarayan Gurukul Bhavnagar',
      period: '2019-2020',
      responsibilities: ['Percentage: 60.67%'],
    },
    {
      title: 'Diploma',
      company: 'Institute :	Sir Bhavsinhji Polytechnic Institute, Bhavnagar',
      period: '2020-2023',
      responsibilities: ['Branch :	Information Technology','Duration  3-Years','CGPA: 7.65'],
    },
    {
        title: 'Bachelor of Engineering (BE)',
        company: 'Institute : Government Engineering College, Bhavnagar',
        period: '2023-2026',
        responsibilities: ['Branch :	Computer Engineering','Duration  3-Years','CGPA:--'],
      }
    // Add more experiences...
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Education</h2>
        <Carousel
          interval={5000} // Auto-slide every 3 seconds
          pause={false} // Don't pause on hover
          touch={true} // Enable touch swiping
          indicators={false} // Hide default indicators
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        >
          {experiences.map((exp, index) => (
            <Carousel.Item key={index}>
              <div className="blur-card">
                <h3>{exp.title}</h3>
                <p>{exp.company} | {exp.period}</p>
                <ul>
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Education;
