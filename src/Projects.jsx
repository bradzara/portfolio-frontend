import './Projects.css';

export function Projects () {
  return (
    <section className='projects' id='projects'>

      <h2 className='heading'>Projects</h2>

      <div className="d-flex justify-content-center align-items-center">
        <div className="card" style={{width: 500}}>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="TeePartyHome.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="TeePartyMatches.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="TeePartyMessage.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="TeePartyEditProfile.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
          <div className="card-body">
            <h5 className="card-title">Tee Party</h5>
            <p className="card-text">Tee Party app is a social platform designed for golf enthusiasts. It allows users to connect based on their stats and location. The app offers features like user profile matching and real-time messaging, creating a community-driven experience tailored to golfers. It is built with React.js for the Front End and Ruby on Rails for the back end. </p>
            <div className="d-flex justify-content-center align-items-center">
              <a href="https://github.com/orgs/TeePartyApp/repositories" target='blank' rel='noopener noreferrer'><i className='bx bxl-github'  id='btn-primary'></i></a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}