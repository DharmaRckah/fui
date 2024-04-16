import React, { useEffect, useState } from "react";
import "./TestimonialSlider.css";
import ReactStars from "react-rating-stars-component";
import Marquee from "react-fast-marquee";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Delbert Simonas",
      profession: "Store Owner",
      content:
        "Online reviews can make or break a customer's decision. Customer satisfaction is our priority.",
    },
    {
      name: "Tikoh Amin",
      profession: "Salon Owner",
      content:
        "When you think of Apple, you think expensive. Skeptical about laptops I purchased.",
    },
    {
      name: "Malachi Lensing",
      profession: "Marketing Manager",
      content:
        "I’ve wanted a MacBook for a while. Excellent build quality, simplicity, and battery life.",
    },
    {
      name: "Christian Isla",
      profession: "Android Developer",
      content:
        "This MacBook has excellent speed, clear screen, and a useful touch bar.",
    },
    {
      name: "Lori Charles",
      profession: "Sales Manager",
      content:
        "Owned an old Gateway laptop for 10 years. Time for an upgrade to Apple.",
    },
  ];

  const [rating, setRating] = useState(5);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to manage carousel pause/resume

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const imgSources = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yZyF373WSegLRC8Oo6ugxmprvSOEgF07Og&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRYzlvKfCid5If-20iWflYAnkz2BWtlGDYw&s",
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Event handlers for mouse enter and leave to pause and resume carousel
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="items">
      <div
        className="container-fluid bg-body-tertiary py-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div id="testimonialCarousel" className="carousel">
          <h2 className="mx-4  text-3xl font-bold  py-2 text-center mb-4 italic font-Aleggra">
            Testimonials
          </h2>
          <div className="carousel-inner">
            <Marquee direction="left" speed={40} pauseOnHover={!isPaused}>
              {testimonials.map((item, index) => (
                <div
                  className={`carousel-item ${
                    index === activeIndex ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="card shadow-sm rounded-3">
                    <div className="quotes display-2 text-body-tertiary">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div
                      style={{ width: "333px", height: "301px" }}
                      className="card-body shadow-1xl"
                    >
                      <p className="text-2xl">“</p>
                      <p
                        style={{ fontFamily: "Source Sans Pro" }}
                        className="card-text text-sm"
                      >
                        {item.content}
                      </p>
                      <div className="d-flex align-items-center pt-2">
                        <img
                          style={{ width: 80, height: 80, margin: "right" }}
                          src={imgSources[index % imgSources.length]} // Using index to cycle through image sources
                          alt=""
                        />
                        <div>
                          <h5
                            style={{ fontFamily: "merriweather" }}
                            className="card-title fw-bold"
                          >
                            {item.name}
                          </h5>
                          <span
                            style={{ fontFamily: "Source Sans Pro" }}
                            className="text-secondary"
                          >
                            {item.profession}
                          </span>
                        </div>
                      </div>
                      <span className="flex mt-2">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={24}
                          activeColor="#ffd700"
                          value={rating}
                        />
                        <span
                          style={{ fontWeight: "bold" }}
                          className="text-xs mt-2 mr-2 "
                        >
                          5.0
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
