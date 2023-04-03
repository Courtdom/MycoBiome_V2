import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";

const Intro = () => {
  const myRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1200,
      backSpeed: 50,

      strings: ["Web Developer", "Front End Developer", "React Developer"],
    });
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (myRef.current) {
      observer.observe(myRef.current);
    }

    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [myRef]);

  return (
    <div className="intro" id="intro" ref={myRef}>
      <div className="left">
        <div className={`imgContainer ${isInView ? "active" : ""}`}>
          <img src="assets/profile.png" alt="profile" className="profileImg" />

          <div className={`iconContainer ${isInView ? "active" : ""}`}>
            <div className="giticon">
              <img src="assets/git.png" alt="giticon" />
            </div>
            <div className="javaicon">
              <img src="assets/javascript.png" alt="javascripticon" />
            </div>
            <div className="reacticon">
              <img src="assets/react.png" alt="reacticon" />
            </div>
            <div className="sassicon">
              <img src="assets/sass.png" alt="sassicon" />
            </div>
            <div className="nodeicon">
              <img src="assets/node.png" alt="webdevicon" />
            </div>
            <div className="bookicon">
              <img src="assets/python.png" alt="bookicon" />
            </div>
            <div className="podcasticon">
              <img src="assets/figma.png" alt="podcasticon" />
            </div>
            <div className="wrestlingicon">
              <img src="assets/MongoDB.png" alt="wrestlingicon" />
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className={`wrapper ${isInView ? "active" : ""}`}>
          <h2>Hello, I'm</h2>
          <h1>Matthew Courtnell</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
