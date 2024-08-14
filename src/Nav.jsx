import React, { useState } from 'react';
import './Nav.css'

export function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fs-4" href="#home">Brad Zara</a>
          {/* Toggle button */}
          <button 
            className="navbar-toggler shadow-none border-0" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar" 
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Sidebar */}
          <div 
            className="sidebar offcanvas offcanvas-start" 
            tabIndex="-1" 
            id="offcanvasNavbar" 
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* Sidebar Header */}
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">B.Z.</h5>
              <button 
                type="button" 
                className="btn-close btn-close-white shadow-none" 
                data-bs-dismiss="offcanvas" 
                aria-label="Close"
                onClick={handleToggle}
              ></button>
            </div>

            {/* Sidebar Body */}
            <div className="offcanvas-body">
              <ul className="navbar-nav d-flex justify-content-sm-center align-items-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item">
                  <a 
                    className="nav-link active" 
                    aria-current="page" 
                    href="#home"
                  >
                    <i className='bx bx-home h2 text-align'></i>
                    <span>Home</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a 
                    className="nav-link" 
                    href="#"
                  >
                    <i className='bx bx-info-square h3'></i>
                    <span>About</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a 
                    className="nav-link" 
                    href="#projects"
                  >
                    <i className='bx bx-briefcase h3'></i>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a 
                    className="nav-link" 
                    href="#contact"
                  >
                    <i className='bx bx-envelope h3'></i>
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
