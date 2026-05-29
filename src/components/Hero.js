import { useState, useEffect } from "react";
import menHero from "../media/men.png";
import womenHero from "../media/women.png";
import jewelryHero from "../media/jewelry.png";
import electronicsHero from "../media/electronics.png";
import { Link } from "react-router-dom";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const slides = [
  {
    image: womenHero,
    title: "WOMEN'S",
    description: "Timeless elegance, redefined",
    alt: "Women's Dress"
  },
  {
    image: menHero,
    title: "MEN'S",
    description: "Modern essentials for him",
    alt: "Men's Suit"
  },
  {
    image: jewelryHero,
    title: "JEWELRY",
    description: "Delicate details that speak volumes",
    alt: "Jewelry Image"
  },
  {
    image: electronicsHero,
    title: "ELECTRONICS",
    description: "Innovation meets design",
    alt: "Headphones Image"
  }
];

function Hero() {
  const [currentImg, setCurrentImg] = useState(0);

  function nextSlide() {
    setCurrentImg((previous) =>
      previous === slides.length - 1 ? 0 : previous + 1
    );
  }

  function prevSlide() {
    setCurrentImg((next) => (next === 0 ? slides.length - 1 : next - 1));
  }

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.alt}
          className={`hero-image ${index === currentImg ? "active" : ""}`}
        />
      ))}
      <div className="container">
        <div className="hero-txt">
          <p className="fine-print">CAMPAIGN 0{currentImg + 1} - WINTER 2026</p>
          <h2 className="hero-head">{slides[currentImg].title}</h2>
          <p>{slides[currentImg].description}</p>
          <Link className="shop" to="/catalog">
            SHOP COLLECTION
          </Link>
        </div>
        <div className="slide-btn">
          <button className="prev" onClick={prevSlide}>
            <LuChevronLeft />
          </button>
          <h3 className="count">0{currentImg + 1}/04</h3>
          <button className="next" onClick={nextSlide}>
            <LuChevronRight />
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
}

export default Hero;
