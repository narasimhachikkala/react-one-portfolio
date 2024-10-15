import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Technologies";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Resume from './components/Experience';

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Resume />
    <Contact />

    <SocialLinks />
    </div>
  );
}

export default App;
