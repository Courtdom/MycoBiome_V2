import Topbar from "./components/topbar/Topbar";
import Intro from "./sections/intro/Intro";
import Portfolio from "./sections/portfolio/Portfolio";
import Works from "./sections/works/Works";
import Contact from "./sections/contact/Contact";
import Testimonials from "./sections/Testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
