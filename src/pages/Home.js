import { useState, useEffect } from "react";

function Home() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1637677692761-bacdc1da11a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDZ8fHxlbnwwfHx8fHw%3D',
      title: 'WOMEN\'S',
      description: 'Timeless elegance, redefined',
      alt: 'Women\s Dress'
    },
    {
      image: 'https://images.unsplash.com/photo-1559907286-d76559dcbdcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDZ8fHxlbnwwfHx8fHw%3D',
      title: 'MEN\'S',
      description: 'Modern essentials for him',
      alt: 'Men\'s Suit'
    },
    {
      image: 'https://images.unsplash.com/photo-1658268703990-e45754dc4930?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D',
      title: 'JEWELRY',
      description: 'Delicate details that speak volumes',
      alt: 'Jewelry Image'
    },
    {
      image: 'https://images.unsplash.com/photo-1649001052949-38b2cc003ee6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDd8fHxlbnwwfHx8fHw%3D',
      title: 'ELECTRONICS',
      description: 'Innovation meets design',
      alt: 'Headphones Image'
    }
  ];

  const [currentImg, setCurrentImg] = useState(0);

  function nextSlide () {
    setCurrentImg((previous) => 
      previous === slides.length - 1 ? 0 : previous + 1
    );
  }

  function prevSlide () {
    setCurrentImg((a) => 
      a === 0? slides.length - 1 : a - 1
    );
  }

  useEffect(() => {
    const slider = setInterval(() => {
      nextSlide();
    }, 4000)
      return () => clearInterval(slider);
  }, [])

 
  return (
    <div className="hero">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.alt}
          className={`hero-image ${
            index === currentImg ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
}

export default Home;
