import { useState, useEffect } from "react";
import PortfolioList from "../../components/portfoliolist/PortfolioList";
import "./Portfolio.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
  reactPortfolio,
  mobilePortfolio,
} from "../../constants/data";

function ImageSlider({ images, duration }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return <img src={images[currentIndex]} alt="sliding" />;
}

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d, index) => (
          <div className="item" key={index}>
            <ImageSlider images={d.images} duration={3000} />
            <div className="iconContainer">
              <a href={d.projectLink} target="_blank" rel="noreferrer">
                <div>
                  <AiFillEye />
                </div>
              </a>
              <a href={d.codeLink} target="_blank" rel="noreferrer">
                <div>
                  <AiFillGithub />
                </div>
              </a>
            </div>
            <div className="textContainer">
              <h2>{d.title}</h2>
              <h4>{d.desc}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
