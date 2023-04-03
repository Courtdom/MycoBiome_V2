import "./Testimonials.scss";
import { testimonialData } from "../../constants/data";
import { BsLinkedin } from "react-icons/bs";
import React, { useRef, useEffect, useState } from "react";

export default function Testimonials() {
  const myRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
    <div className="testimonials" id="testimonials" ref={myRef}>
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialData.map((d) => (
          <div className={`card ${isInView ? "active" : ""}`}>
            <div className="top">
              <img className="user" src={d.img} alt="" />

              <div className="right">
                <a target="_blank" rel="noreferrer" href={d.linked}>
                  <BsLinkedin className="icon" />
                </a>
              </div>
            </div>
            <div className="center">
              <p>{d.desc}</p>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
