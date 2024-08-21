import './Navbar.css';

export function Nav() {
  return (
    <header className="header">
      <a href="#home"><img className="logo" src="logo.png" alt="Logo" /></a>

      <i class='bx bx-menu-alt-right' id="menu-icon"></i>
      
      {/* <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav> */}
    </header>
  )
}