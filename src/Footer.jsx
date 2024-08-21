import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href='https://www.linkedin.com/in/bradleyzara/' target='blank' rel='noopener noreferrer'><i className='bx bxl-linkedin-square'></i></a>
        <a href='https://github.com/bradzara' target='blank' rel='noopener noreferrer'><i className='bx bxl-github' ></i></a>
        <a href='https://www.instagram.com/bradzara/' target='blank' rel='noopener noreferrer'><i className='bx bxl-instagram'></i></a>
      </div>

      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Projects</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <p className="copyright"><i class='bx bx-copyright' > Brad Zara | All Rights Reserved</i></p>
    </footer>
  )
}