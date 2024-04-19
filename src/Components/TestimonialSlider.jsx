import React from "react";
import "./TestimonialSlider.css";
import ReactStars from "react-rating-stars-component";

const TestimonialSlider = () => {
  const imgSources = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9yZyF373WSegLRC8Oo6ugxmprvSOEgF07Og&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xO4UktfIe6YAE0bSQ1nbm8VJwY7gh5_NjA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRYzlvKfCid5If-20iWflYAnkz2BWtlGDYw&s",
  ];
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
        "Everest DG team has been a solid partner for a variety of needs as my business has evolved. From web strategy, to social media management and paid campaigns. We also utilize their marketing automation offering and appreciate the assistance provided with the execution of our campaigns.on more projects in the future!",
    },
    {
      name: "Adam Awang",
      profession: "Director",
      content:
        "Everest delivers bespoke software and tailors industrial packages to suit certain automation requirements. They were our vendor of choice because of the professionalism and personalities of their staff and appreciate the assistance provided with the execution of our campaigns.on more projects in the future!",
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
              <div className="card shadow-sm rounded-3">
                <div className="quotes display-2 text-body-tertiary">
                  <i className="bi bi-quote"></i>
                </div>
                <div
                  className="card-body h-[500px] shadow-1xl"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    
                  }}
                >
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    style={{ height: "30px", width: "40px" }}
                    className="rounded ml-24 mt-[65px] justify-content-center"
                  />
                  <div className="testimonial-content ">
                    <div>
                      {" "}
                      <img
                        src={imgSources[index % imgSources.length]}
                        alt=""
                        className="testimonial-image rounded-full ml-10 mt-[-3px]"
                      />
                    </div>
                    <p className="w-1/2 text-justify ml-9  text-xs">
                      {item.content}
                    </p>
                    <div
                      className="testimonial-info mb-10"
                      style={{ marginTop: "auto" }}
                    >
                      <h5 className="card-title fw-bold mt-3 ">{item.name}</h5>
                      <span className="text-secondary ">{item.profession}</span>
                    </div>
                  </div>
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
