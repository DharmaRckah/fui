import { React, useState } from "react";
import "./TestimonialSlider.css";
import ReactStars from "react-rating-stars-component";
import { BiSolidQuoteLeft } from "react-icons/bi";

const TestimonialSlider = () => {
  const imgSources = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yZyF373WSegLRC8Oo6ugxmprvSOEgF07Og&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRYzlvKfCid5If-20iWflYAnkz2BWtlGDYw&s",
  ];
  const [rating, setRating] = useState(5);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const testimonials = [
    {
      name: "Ammar Saif",
      profession: "Founder / CEO",
      content:
        "I am very thankful to Everest DG dedication for helping me grow my business! From the time, I submitted my inquiry to project completion, I was notified of the next steps that kept me informed for this month log project. The results of the project exceeded my expectations and look forward to working on more projects in the future!",
    },
    {
      name: "Emma Martin",
      profession: "COO",
      content:
        "Everest DG team has  been a  solid  partner  for a   variety of needs as my business has evolved. From web strategy, to social media management and paid campaigns. We also utilize their marketing automation offering and appreciate the assistance provided with the execution of our campaigns.on more projects in the future!",
    },
    {
      name: "Adam Awang",
      profession: "Director",
      content:
        "Everest delivers bespoke software and tailors industrial packages to suit certain automation requirements. They were our vendor of choice because of the professionalism and personalities of their staff and appreciate the assistance provided with the execution of our campaigns. and look forward to working on more projects in the future!",
    },
  ];

  return (
    <div className="items">
      <div className="container-fluid bg-body-tertiary py-3">
        <h2 className="mx-4 text-3xl font-bold py-2 text-center mb-4 italic font-Aleggra">
          Testimonials
        </h2>
        <div className="testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="card shadow-sm rounded-3 sm:mt-1">
                <div className="quotes display-2 text-body-tertiary">
                  <i className="bi bi-quote"></i>
                </div>
                <div
                  style={{ width: "333px" }}
                  className="card-body shadow-1xl"
                >
                  <p className="text-sm  gray-500">
                    <BiSolidQuoteLeft />
                  </p>
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
                      className="rounded-full"
                    />
                    <div>
                      <span
                        style={{ fontFamily: "merriweather" }}
                        className="card-title fw-bold"
                      >
                        {item.name}
                      </span>
                      <br />
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
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
