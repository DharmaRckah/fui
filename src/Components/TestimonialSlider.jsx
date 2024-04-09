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

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const imgtypes = [
    "user",
    "passport",
    "cuteGirl",
    "boy",
    "girl",
    "cute",
    "cutepic",
  ];

  const getRandomImgType = () => {
    return imgtypes[Math.floor(Math.random() * imgtypes.length)];
  };

  return (
    <div className="items ">
      <div className="container-fluid bg-body-tertiary py-3">
        <div id="testimonialCarousel" className="carousel">
          <div className="carousel-inner ">
            <Marquee direction="left" speed={40}>
              {testimonials.map((item, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="card shadow-sm rounded-3">
                    <div className="quotes display-2 text-body-tertiary">
                      <i className="bi bi-quote"></i>
                    </div>
                    <div className="card-body">
                      <p className="card-text">{item.content}</p>
                      <div className="d-flex align-items-center pt-2">
                        <img
                          style={{ width: 80, height: 80 }}
                          src={`https://source.unsplash.com/random/300×300/?${getRandomImgType()}&${index}`}
                          alt=""
                        />
                        <div>
                          <h5 className="card-title fw-bold">{item.name}</h5>
                          <span className="text-secondary">
                            {item.profession}
                          </span>
                        </div>
                      </div>
                      <ReactStars
                        count={5}
                        onChange={5}
                        size={24}
                        activeColor="#ffd700"
                        value={5}
                      />
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
