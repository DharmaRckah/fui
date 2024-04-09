import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BlogDetails = () => {
  // Retrieve image path from query parameter
  const searchParams = new URLSearchParams(window.location.search);
  const imagePath = searchParams.get("imagePath");

  // Array of 8 random solar image URLs with "technology" appended
  const imageUrls = [
    "https://source.unsplash.com/random/400x300?sig=1&nature-solar",
    "https://source.unsplash.com/random/400x300?sig=2&technology",
    "https://source.unsplash.com/random/400x300?sig=3&natur ",
    "https://source.unsplash.com/random/400x300?sig=4&solar",
    "https://source.unsplash.com/random/400x300?sig=5&solarpanel",
    "https://source.unsplash.com/random/400x300?sig=6&tech",
    "https://source.unsplash.com/random/400x300?sig=7&solar",
    "https://source.unsplash.com/random/400x300?sig=8&nature",
  ];

  return (
    <>
      {imagePath && (
        <div className="container mx-auto">
          <img
            src={imagePath}
            alt="Blog Image"
            className="w-full  xl:h-96 lg:h-96 sm:h-auto md:h-auto"
          />
          <p>
            Spanning 395 hectares in total size, Greenwood presents a selection
            of plots to build your dream community with the Dubai skyline as
            your backdrop....
          </p>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="m-4 bg-white rounded shadow">
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-t  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  xl:grid-cols-4 2xl:grid-cols-6"
            />
            <div className="p-4"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogDetails;
