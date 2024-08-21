import './Nav.css';

export function Nav() {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-transparent">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand fs-4" href="#home">
            <img className="img-fluid logo" src="logo.png" alt="Logo" />
          </a>

          {/* Toggle button */}
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
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
              <h5 className="offcanvas-title size-sm" id="offcanvasNavbarLabel">
                <img className="img-fluid sidebar-logo" src="logo.png" alt="Logo" />
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* Nav Bar Body */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-sm-center align-items-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home">
                    <i className="bx bx-home h2"></i>
                    <span className="ms-2">Home</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#about">
                    <i className="bx bx-info-square h3"></i>
                    <span className="ms-2">About</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#projects">
                    <i className="bx bx-briefcase h3"></i>
                    <span className="ms-2">Projects</span>
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact">
                    <i className="bx bx-envelope h3"></i>
                    <span className="ms-2">Contact</span>
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
