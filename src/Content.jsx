import './Content.css'
import { Typewriter } from 'react-simple-typewriter';

export function Content() {
  
  return (
    <section className='home'>
      <div className="home-img">
        <img src="profile-pic.png" alt="" />
      </div>

      <div className='home-content'>
        <h1>Hi, It&apos;s <span className='span'>Brad</span></h1>
        <h3>
          I&apos;m a <span className='span'>
            <Typewriter
              words={[
                'Software Engineer',
                'Web Developer',
                'Full-Stack Engineer',
                'Backend Engineer',
                'Frontend Engineer',
                'Data Engineer'
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={75}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
        </h3>
        
        <p>Javascript | React.JS | Ruby | Ruby on Rails | Python | Django | PostgreSQL | HTML | CSS</p>

        <div className='social-icons'>
          <a href='https://www.linkedin.com/in/bradleyzara/' target='blank' rel='noopener noreferrer'><i className='bx bxl-linkedin-square'></i></a>
          <a href='https://github.com/bradzara' target='blank' rel='noopener noreferrer'><i className='bx bxl-github' ></i></a>
          <a href='https://www.instagram.com/bradzara/' target='blank' rel='noopener noreferrer'><i className='bx bxl-instagram'></i></a>
        </div>
      </div>

      
    </section>
  )
}