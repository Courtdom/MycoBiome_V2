import "./Works.scss";
import { worksData } from "../../constants/data";
import { useState } from "react";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < worksData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <h1>Skills</h1>
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {worksData.map((d) => (
          <div
            className={`container ${
              parseInt(d.id) === currentSlide + 1 ? "active" : ""
            }`}
          >
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2
                    className={`${
                      parseInt(d.id) === currentSlide + 1 ? " active" : ""
                    }`}
                  >
                    {d.title}
                  </h2>
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="mobile" />
                  </div> */}
                  <p
                    className={`${
                      parseInt(d.id) === currentSlide + 1 ? " active" : ""
                    }`}
                  >
                    {d.desc}
                  </p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.icon}
                  alt="mobile"
                  className={`${
                    parseInt(d.id) === currentSlide + 1 ? " active" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
