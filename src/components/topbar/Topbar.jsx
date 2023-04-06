import "./Topbar.scss";
import {
  BsPhoneLandscape,
  BsLinkedin,
  BsGithub,
  BsMailbox,
} from "react-icons/bs";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <a href="#intro" className="logo">
          mc.
        </a>
        <div className="itemContainer">
          <BsPhoneLandscape className="icon" />
          <span>07940097509</span>
        </div>
        <div className="itemContainer">
          <BsMailbox className="icon" />
          <span>Mcourtnelldev@gmail.com</span>
        </div>

        <div className="socialContainer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/matthew-courtnell-3413111b5/"
          >
            <BsLinkedin className="icon" />
          </a>
        </div>
        <div className="socialContainer">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Courtdom"
          >
            <BsGithub className="icon" />
          </a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
