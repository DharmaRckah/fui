import React, { useEffect } from "react";
import "./TestimonialSlider.css";
import ReactStars from "react-rating-stars-component";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Delbert Simonas",
      profession: "Store Owner",
      content:
        "Online reviews can make or break a customer's decision to make a purchase. Read about these customer review sites where your customers' satisfaction is our priority.",
    },
    {
      name: "Tikoh Amin",
      profession: "Salon Owner",
      content:
        "When you think of Apple, you automatically think expensive. If you're anything like me, when purchasing this laptop I was skeptical about the laptops I purchased.",
    },
    {
      name: "Malachi Lensing",
      profession: "Marketing Manager",
      content:
        "I’ve wanted a MacBook for a while now because of the build quality and the simplicity of the OS. I spend an average of 6 hours a day using it for college, and the battery still has a fair amount of charge left.",
    },
    {
      name: "Christian Isla",
      profession: "Android Developer",
      content:
        "This MacBook has excellent processing speed. The screen is crystal clear, and I really enjoy the touch bar. I set up the fingerprint reader.",
    },
    {
      name: "Lori Charles",
      profession: "Sales Manager",
      content:
        "For the last 10 years, I have owned an old Gateway laptop. Although it was amazing and lasted me, it was time for an upgrade. I own an Apple phone, so I decided to look into a computer.",
    },
  ];

  const ratingChanged = () => {
    return 5;
  };

  return (
    <div className="items">
      <div className="container-fluid bg-body-tertiary py-3">
        <div id="testimonialCarousel" className="carousel">
          <div className="carousel-inner">
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
                        src={`https://source.unsplash.com/random/300×${
                          index + 1
                        }00/?user `}
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
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
