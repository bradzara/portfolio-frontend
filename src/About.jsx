import { useState, useRef, useEffect } from 'react';
import './About.css';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  const toggleReadMore = (event) => {
    event.preventDefault();
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isExpanded) {
      const scrollHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = `${scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isExpanded]);

  return (
    <section className="about" id='about'>
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3 className="text-animation">
          <span></span>
        </h3>
        <p>
          A passionate software engineer with a solid foundation in both technology and design. I hold a Bachelor's degree in Information Systems with a focus on Cybersecurity from DeVry University and have further honed my skills through a certificate in Software Development from Actualize Coding Bootcamp.
        </p>

        <div
          className={`hidden-content ${isExpanded ? 'expanded-content' : ''}`}
          ref={contentRef}
        >
          <p>My expertise spans multiple facets of software engineering, including backend and frontend development, UI/UX design, database management, and web development. This diverse skill set allows me to approach projects from a well-rounded perspective, ensuring robust functionality and an intuitive user experience.</p>
          <p>Currently, I am serving as a teachers assistant at Actualize Coding Bootcamp where I am helping mold the new minds of the software engineering field. I also bring valuable experience from my previous role as a Help Desk Technician. This position sharpened my problem-solving skills and deepened my understanding of client needs and technical troubleshooting.</p>
          <p>Outside of work, I enjoy a range of activities that keep me energized and balanced. I love hiking through scenic trails, hitting the slopes on my snowboard, and frequenting the gym to stay fit. I also have a keen interest in following sports, and I cherish spending quality time with family and friends.</p>
          <p>I am excited to leverage my education and hands-on skills to tackle new challenges in the software engineering landscape. If you're interested in collaborating or just want to connect, feel free to reach out!</p>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <a className='btn-read-more' onClick={toggleReadMore}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </a>
        </div>
      </div>
    </section>
  );
}
