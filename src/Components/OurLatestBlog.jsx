import React, { useRef, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { animateScroll } from "react-scroll";
import "../App.css";

const OurLatestBlog = () => {
  const container = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [expandedDescription, setExpandedDescription] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (container.current) {
      animateScroll.scrollMore(-200, {
        container: container.current,
        smooth: true,
      });
    }
  };

  const scrollRight = () => {
    if (container.current) {
      animateScroll.scrollMore(200, {
        container: container.current,
        smooth: true,
      });
    }
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + "...";
    }
    return description;
  };

  const handleExpandDescription = (index) => {
    setExpandedDescription({ ...expandedDescription, [index]: true });
  };

  const data = [
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://assets-global.website-files.com/624fdc5e82dc83514cd9d166/64883910548233cfc9d1f61a_1920-solar-panel-cell-on-dramatic-sunset-sky-background-p-800.jpg",
      title: "Harnessing the Power of the Sun: A Sustainable Future",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.pexels.com/photos/944407/pexels-photo-944407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Exploring the Beauty of Nature: A Photographic Journey",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
    {
      url: "https://images.unsplash.com/photo-1524429656589-6633a470097c",
      title: "Unveiling the Mysteries of the Deep: A Marine Exploration",
      description:
        "Discover how our latest solar energy project is revolutionizing clean energy production.",
    },
  ];

  return (
    <div
      data-aos="zoom-out-down"
      className="h-h/2 w-full bg-inherit p-8 mb-4 flex flex-col relative"
      style={{ overflowY: "hidden" }}
    >
      <div className="flex justify-center mb-10">
        <p className="font-semibold text-2xl font-Montserrat text-black">
          Our Latest Blogs
        </p>
      </div>
      <button
        onClick={scrollLeft}
        className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)] mt-4 ml-4 absolute top-0 left-0"
      >
        <FaArrowLeft className="m-auto" />
      </button>
      <button
        onClick={scrollRight}
        className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)] mt-4 mr-4 absolute top-0 right-0"
      >
        <FaArrowRight className="m-auto" />
      </button>
      <Marquee speed={30}>
        <div
          className="w-full flex gap-5 items-start parent-container justify-center"
          ref={container}
          style={{
            scrollSnapType: "x mandatory",
            marginTop: "8px", // Adjust margin-top for large view
            marginBottom: "8px", // Adjust margin-bottom for large view
          }}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-blue-200 p-3 child-item mr-4" // Adjust the margin value as needed
              style={{ width: width >= 760 ? "25vw" : "70vw", height: "auto" }}
            >
              <div
                className="bg-blue-400"
                style={{ height: "150px", overflow: "hidden" }}
              >
                <img
                  className=" h-full w-full object-cover"
                  src={item.url}
                  alt={item.title}
                />
              </div>
              <p className="mt-2 font-semibold">{item.title}</p>
              <p className="text-[0.8rem] mt-1">
                {expandedDescription[index]
                  ? item.description
                  : truncateDescription(item.description)}
              </p>
              <div className="flex items-center gap-1">
                <p
                  className="underline cursor-pointer"
                  onClick={() => handleExpandDescription(index)}
                >
                  Read Story
                </p>
                {!expandedDescription[index] && (
                  <p
                    className="mt-2 cursor-pointer"
                    onClick={() => handleExpandDescription(index)}
                  >
                    <FaArrowRight />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default OurLatestBlog;
