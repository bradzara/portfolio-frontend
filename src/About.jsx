import { useState } from 'react';
import './About.css';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };
  
  return (
    <section className="about" id='about'>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3 className="text-animation">
          <span></span>
        </h3>
        <p> A passionate software engineer with a solid foundation in both technology and design. I hold a Bachelor's degree in Information Systems with a focus on Cybersecurity from DeVry University and have further honed my skills through a certificate in Software Development from Actualize Coding Bootcamp.</p>

        {isExpanded && (
          <>
            <p> My expertise spans multiple facets of software engineering, including backend and frontend development, UI/UX design, database management, and web development. This diverse skill set allows me to approach projects from a well-rounded perspective, ensuring robust functionality and an intuitive user experience.</p>
            <p> While I am new to the field of software engineering, I bring valuable experience from my previous role as a Help Desk Technician. This position sharpened my problem-solving skills and deepened my understanding of client needs and technical troubleshooting.</p>
            <p>Outside of work, I enjoy a range of activites that keep me energized and balanced. I love hiking through scenic trails, hitting the slopes on my snowboard, and frequenting the gym to stay fit. I also have a keen interest in following sports, and I cherish spending quality time with family and friends.</p>
            <p> I am excited to leverage my education and hands-on skills to tackle new challenges in the software engineering landscape. If you're interested in collaborating or just want to connect, feel free to reach out!</p>
          </>
        )}
        <a href='#' className='btn' onClick={toggleReadMore}>{isExpanded ? 'Read Less' : 'Read More'}</a>
      </div>
    </section>
  );
}
