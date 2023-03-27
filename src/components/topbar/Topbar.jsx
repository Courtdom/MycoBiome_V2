import "./Topbar.scss";
import { BsPhone, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mc.
          </a>
          <div className="itemContainer">
            <BsPhone className="icon" />
            <span>07940097509</span>
          </div>
          <div className="itemContainer">
            <HiOutlineMail className="icon" />
            <span>Mcourtnelldev@gmail.com</span>
          </div>
        </div>
        <div className="right">
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
    </div>
  );
};

export default Topbar;
