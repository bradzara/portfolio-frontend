import React, { useState, useEffect } from 'react';
import './Navbar.css';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 200; // Adjust based on your needs

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <a href="#home"><img className="logo" src="logo.png" alt="Logo" /></a>

      <i 
        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu-alt-right'}`} 
        id="menu-icon" 
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>
    </header>
  );
}
