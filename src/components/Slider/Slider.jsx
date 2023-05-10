import "./Slider.scss";
import { useState, useEffect, useRef } from "react";
import { bannerData } from "../../constants/data";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    const slideRefCurrent = slideRef.current;

    if (slideRef.current) {
      observer.observe(slideRef.current);
    }

    return () => {
      if (slideRefCurrent) {
        observer.unobserve(slideRefCurrent);
      }
    };
  }, [slideRef]);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < bannerData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="slider">
      <div className="container" ref={slideRef}>
        <div className="arrowLeft" onClick={() => handleClick("left")}>
          <BsArrowLeft className="icon" />
        </div>
        <div
          className="wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
        >
          {bannerData.map((d) => (
            <div
              className={`slide ${
                parseInt(d.id) === currentSlide + 1 && isInView ? "active" : ""
              }`}
              style={{
                backgroundColor: `#${d.bg}`,
              }}
              key={d.id}
            >
              <div className="imgContainer">
                <img
                  src={d.img}
                  alt="banner"
                  className={`${
                    parseInt(d.id) === currentSlide + 1 && isInView
                      ? "active"
                      : ""
                  }`}
                />
              </div>
              <div className="infoContainer">
                <h1
                  className={`${
                    parseInt(d.id) === currentSlide + 1 && isInView
                      ? "active"
                      : ""
                  }`}
                >
                  {d.title}
                </h1>
                <p
                  className={`${
                    parseInt(d.id) === currentSlide + 1 && isInView
                      ? "active"
                      : ""
                  }`}
                >
                  {d.desc}
                </p>
                <button
                  className={`${
                    parseInt(d.id) === currentSlide + 1 && isInView
                      ? "active"
                      : ""
                  }`}
                >
                  {d.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="arrowRight" onClick={() => handleClick()}>
          <BsArrowRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
