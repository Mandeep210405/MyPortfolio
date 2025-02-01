// import React from 'react';
// import { Carousel } from 'react-bootstrap';

// const Experience = () => {
//   const experiences = [
//     {
//       title: 'Senior Developer',
//       company: 'Tech Corp',
//       period: '2020-2023',
//       responsibilities: ['Led frontend team', 'Implemented new features', 'Optimized performance']
//     },
//     {
//       title: 'Senior Developer',
//       company: 'Tech Corp',
//       period: '2020-2023',
//       responsibilities: ['Led frontend team', 'Implemented new features', 'Optimized performance']
//     },
//     // Add more experiences...
//   ];

//   return (
//     <section id="experience" className="experience">
//       <div className="container">
//         <h2>Work Experience</h2>
//         <Carousel>
//           {experiences.map((exp, index) => (
//             <Carousel.Item key={index}>
//               <div className="blur-card">
//                 <h3>{exp.title}</h3>
//                 <p>{exp.company} | {exp.period}</p>
//                 <ul>
//                   {exp.responsibilities.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from 'react';
import { Carousel } from 'react-bootstrap';
import '/src/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020-2023',
      responsibilities: ['Led frontend team', 'Implemented new features', 'Optimized performance'],
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions',
      period: '2018-2020',
      responsibilities: ['Developed responsive UIs', 'Collaborated with designers', 'Improved website performance'],
    },
    // Add more experiences...
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <Carousel
          interval={5000} // Auto-slide every 3 seconds
          pause={true} // Don't pause on hover
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

export default Experience;