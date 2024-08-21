import { Nav } from "./Navbar";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

function App() {
  return (
      <div>
        <video className="background-video" autoPlay loop muted>
          <source src="/cloud-effect.mp4" type="video/mp4" />
        </video>
        <Nav />
        <Content />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;