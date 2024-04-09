import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../App.css";

const OurLatestBlog = () => {
  const container = useRef(null);
  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollLeft -= 210;
    }
  };

  const scrollRight = () => {
    if (container.current) {
      container.current.scrollLeft += 310;
    }
  };
  return (
    <div className="h-[88%] w-full bg-black p-8">
      <div className="flex text-white justify-between mb-10">
        <p className="font-semibold text-2xl font-Montserrat">
          Our Latest Blogs
        </p>
        <div onClick={scrollLeft} className="flex gap-5">
          <button className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]">
            <FaArrowLeft className="m-auto" />
          </button>

          <button
            onClick={scrollRight}
            className="lg:h-[7vh] lg:w-[8vh] bg-[rgba(32,157,218,1)]"
          >
            <FaArrowRight className="m-auto" />
          </button>
        </div>
      </div>
      <div
        ref={container}
        className="h-[80%] w-[full] flex gap-5 items-center parent-container"
      >
        {/** This flex is getting shirnk can you write so that it can be scrollable  */}
        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        <div className="md: md:w-[25%] w-[75%] bg-blue-200 p-3 child-item">
          <div className="h-[50%] w-full bg-blue-400">
            <img
              className=" w-full object-cover"
              src="https://media.istockphoto.com/id/1353364940/photo/modern-windmill-in-wide-field-closeup-energy-efficiency.jpg?s=2048x2048&w=is&k=20&c=bAjjk9-DUFgxR795vSMz9roOkYteL8HB-lEJr6M_wMQ="
              alt=""
            />
          </div>
          <p className="mt-2 font-semibold">
            Lorem ipsum dolor sit <br /> amet, conse ct etur.
          </p>
          <p className="text-[0.8rem] mt-1">
            Let's delve into trends shaping the 2024 job market with drawing
            insights from layoff of 2023 and explore the skills and experiences
            that are most in demand.
          </p>

          <div className="flex items-center gap-1">
            <Link className="underline">Read Story</Link>
            <p className="mt-2">
              <FaArrowRight />
            </p>
          </div>
        </div>

        {/* Repeat the above div structure for other blog items */}
      </div>
    </div>
  );
};

export default OurLatestBlog;
