import { Nav } from "./Nav";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { About } from "./About";

function App() {
  return (
      <div>
        <video className="background-video" autoPlay loop muted>
          <source src="/cloud-effect.mp4" type="video/mp4" />
        </video>
        <Nav />
        <Content />
        <About />
        <Footer />
      </div>
  );
}

export default App;