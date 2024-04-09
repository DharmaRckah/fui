import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar";
const Blog = () => {
  const images = [
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/tilal-al-furjan_1.jpg?sfvrsn=b21dafa6_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/palm-jebel-ali783c185a-82a2-4ab7-b179-cc766fc35d19.jpg?sfvrsn=3b4549a7_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/como-residencesba2d50b8-c2c1-4897-9ca6-c26cdba91c08.jpg?sfvrsn=fdbc2dc2_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/pbt-exterior_1.jpg?sfvrsn=40812c3a_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/rixos-hotel-residences-dubai-islands.jpg?sfvrsn=2ba3e745_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/jebel-ali-village6.jpg?sfvrsn=10753bc1_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/tilal-al-furjan_1.jpg?sfvrsn=b21dafa6_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/murooj-al-furjanf73291f1-835a-4386-8987-c1a92e04a7d6.jpg?sfvrsn=e4a44c25_1",
  ];

  // Array of card images for the new section
  const cardImages = [
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/green-wood32412495-33ff-4c34-9980-9babbd39536e.jpg?sfvrsn=c152e73a_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/palm-jebel-ali-400x4404.jpg?sfvrsn=4a1963a0_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/como-residences395e5f2d-2922-415a-8de9-11ddde723510.jpg?sfvrsn=e574438b_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/palm-beach-towers1a79a19f-9b47-4c75-99f7-385b97f08ce6.jpg?sfvrsn=477f0303_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/rixos-hotel-residences-dubai-islands.jpg?sfvrsn=2ba3e745_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/jebel-ali-village605813c0-5ed3-45d6-af36-ca413494d953.jpg?sfvrsn=a9b75eb2_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/tilal-al-furjana4f12038-4692-4f97-9b34-6ad869a2c41d.jpg?sfvrsn=89338c83_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/world-of-nakheels/murooj-al-furjan-.jpg?sfvrsn=d8c9eaff_1",

    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/green-wood32412495-33ff-4c34-9980-9babbd39536e.jpg?sfvrsn=c152e73a_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/palm-jebel-ali-400x4404.jpg?sfvrsn=4a1963a0_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/projects/como-residences395e5f2d-2922-415a-8de9-11ddde723510.jpg?sfvrsn=e574438b_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/palm-beach-towers1a79a19f-9b47-4c75-99f7-385b97f08ce6.jpg?sfvrsn=477f0303_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/spotlight/new-launches/rixos-hotel-residences-dubai-islands.jpg?sfvrsn=2ba3e745_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/jebel-ali-village605813c0-5ed3-45d6-af36-ca413494d953.jpg?sfvrsn=a9b75eb2_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/developments/tilal-al-furjana4f12038-4692-4f97-9b34-6ad869a2c41d.jpg?sfvrsn=89338c83_1",
    "https://www.nakheel.com/images/nakheelcorporatelibraries/world-of-nakheels/murooj-al-furjan-.jpg?sfvrsn=d8c9eaff_1",
  ];

  const cardTexts = [
    "Greenwood",
    "Palm Jabel Ali",
    "Como Residences",
    "Palm Beach Tower",
    "Rixos Dubai Islands",
    "Jabel Ali Village",
    "Tilal AL Furjan",
    "Murooj Al Furjan",

    "Greenwood",
    "Palm Jabel Ali",
    "Como Residences",
    "Palm Beach Tower",
    "Rixos Dubai Islands",
    "Jabel Ali Village",
    "Tilal AL Furjan",
    "Murooj Al Furjan",
  ];

  const cartDescription = [
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",

    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
    "Spanning 395 hectares in total size, Greenwood presents a selection of plots to build your dream community with the Dubai skyline as your backdrop.",
  ];

  const [numImages, setNumImages] = useState(8);

  const handleLoadMore = () => {
    setNumImages(numImages + 8);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <Navbar backgroundColor={"#152E3A"} />
      <div className="flex-grow">
        <Carousel
          showThumbs={false}
          className="carousel"
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: "calc(100vh - 100px)", borderRadius: 0 }}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full h-full bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 pl-8 pr-8">
            OUR NEW LAUNCHES
          </h2>
          <p className="pl-8 pr-8 text-xl mb-8">
            Our developments embody innovation and sophistication, setting new
            benchmarks in global living.
          </p>

          <div className="pl-6 pr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 xl:grid-cols-4 2xl:grid-cols-6 ">
            {cardImages.slice(0, numImages).map((image, index) => (
              <Link
                key={index}
                to={`/blog/blog-details?imagePath=${encodeURIComponent(image)}`} // Pass image path as query parameter
                className="w-full"
              >
                <div className="bg-white rounded-md shadow-md overflow-hidden relative h-full">
                  <div className="absolute bottom-6 left-0 right-0 bg-blue bg-opacity-50 text-white text-center py-2 text-3xl font-extrabold">
                    {cardTexts[index]}
                  </div>
                  <img
                    src={image}
                    alt={`Card ${index + 1}`}
                    className="w-full h-100 object-cover"
                    style={{ aspectRatio: "16/28" }} // Ensure all images have the same aspect ratio
                  />
                </div>
              </Link>
            ))}
          </div>
          {numImages < cardImages.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
              >
                Load More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
