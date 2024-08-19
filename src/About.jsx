import './About.css';

export function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3 className="text-animation">
          <span></span>
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque aspernatur est ad vitae iste, voluptate dolorem, optio adipisci quisquam deleniti explicabo sit natus pariatur neque minus, cum porro ipsa eos.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}
