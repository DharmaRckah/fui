// import React from "react";

const Footer = () => {
  return (
    // <div className=" h-[40%] md:h-[70%] lg:h-[70%] w-full bg-black">
    //   <div className=" h-[100%] w-full  bg-[#82b2ca] ">
    //     <p className=" font-bold text-center p-5">Footer Section</p>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center px-20 w-full bg-[#0B1D26] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="h-[100%] flex gap-5 py-12 border-b border-solid border-slate-700 max-md:flex-wrap">
        <img
          loading="lazy"
          src="logo.png"
          className="shrink-0 self-start max-w-full aspect-[4] w-[9%] h-[5rem]"
        />
        <div className="flex flex-col flex-1 whitespace-nowrap">
          <div className="justify-center py-3 text-base font-medium leading-4 text-white">
            Product
          </div>
          <div className="flex flex-col leading-[140%]">
            <div className="justify-center py-3 text-base text-slate-200">
              Pricing
            </div>
            <div className="justify-center py-3 text-base text-slate-200">
              Overview
            </div>
            <div className="justify-center py-3 text-base text-slate-200">
              Browse
            </div>
            <div className="flex gap-1 py-3">
              <div className="text-base text-slate-200">Accessibility</div>
              <div className="flex self-start p-1 text-xs text-purple-800 bg-purple-100 rounded">
                <div className="justify-center px-1">BETA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base whitespace-nowrap">
          <div className="justify-center py-3 font-medium text-white leading-[110%]">
            Solutions
          </div>
          <div className="flex flex-col leading-[140%] text-slate-200">
            <div className="justify-center py-3">Brainstorming</div>
            <div className="justify-center py-3">Ideation</div>
            <div className="justify-center py-3">Wireframing</div>
            <div className="justify-center py-3">Research</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base">
          <div className="justify-center py-3 font-medium text-white whitespace-nowrap leading-[110%]">
            Resources
          </div>
          <div className="flex flex-col leading-[140%] text-slate-200">
            <div className="justify-center py-3">Help Center</div>
            <div className="justify-center py-3 whitespace-nowrap">Blog</div>
            <div className="justify-center py-3 whitespace-nowrap">
              Tutorials
            </div>
            <div className="justify-center py-3 whitespace-nowrap">FAQs</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base">
          <div className="justify-center py-3 font-medium text-white whitespace-nowrap leading-[110%]">
            Support
          </div>
          <div className="flex flex-col leading-[140%] text-slate-200">
            <div className="justify-center py-3">Contact Us</div>
            <div className="justify-center py-3 whitespace-nowrap">
              Developers
            </div>
            <div className="justify-center py-3 whitespace-nowrap">
              Documentation
            </div>
            <div className="justify-center py-3 whitespace-nowrap">
              Integrations
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 text-base">
          <div className="justify-center py-3 font-medium text-white whitespace-nowrap leading-[110%]">
            Company
          </div>
          <div className="flex flex-col leading-[140%] text-slate-200">
            <div className="justify-center py-3 whitespace-nowrap">About</div>
            <div className="justify-center py-3 whitespace-nowrap">Press</div>
            <div className="justify-center py-3 whitespace-nowrap">Events</div>
            <div className="flex gap-2 py-3 pr-1.5">
              <div>Request Demo</div>
              <img
                loading="lazy"
                src="vc.png"
                className="shrink-0 aspect-square mt-1 w-[12px] h-[11px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 py-6 max-md:flex-wrap">
        <div className="flex-1 my-auto text-base leading-5 text-slate-200 max-md:max-w-full">
          uteach @ 2023. All rights reserved.
        </div>
        <div className="flex gap-5 justify-between max-md:flex-wrap">
          <div className="justify-center self-start py-3 text-base leading-5 whitespace-nowrap text-slate-200">
            Terms
          </div>
          <div className="justify-center self-start py-3 text-base leading-5 whitespace-nowrap text-slate-200">
            Privacy
          </div>
          <div className="justify-center self-start py-3 text-base leading-5 whitespace-nowrap text-slate-200">
            Contact
          </div>
          <div className="flex gap-2 py-3 text-base leading-5 whitespace-nowrap text-slate-200">
            <img
              loading="lazy"
              src="glob.png"
              className="shrink-0 aspect-square w-[23px]"
            />
            <div>EN</div>
          </div>
          <div className="flex gap-2 justify-between py-3 text-base leading-5 whitespace-nowrap text-slate-200">
            <img
              loading="lazy"
              src="euro.png"
              className="shrink-0 aspect-[0.95] w-[22px]"
            />
            <div>EUR</div>
          </div>
          <div className="flex justify-center items-center py-3">
            <img
              loading="lazy"
              src="humn.png"
              className="border-2 border-solid aspect-square border-slate-200 stroke-[1.897px] stroke-slate-200 w-[23px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
