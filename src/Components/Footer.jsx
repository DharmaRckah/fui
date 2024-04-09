// import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center px-20 w-full bg-[#0B1D26] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="h-[100%] flex gap-5 py-12 justify-center border-b border-solid border-slate-700 max-md:flex-wrap">
        <img
          loading="lazy"
          src={logo}
          className="shrink-0 self-start max-w-full  aspect-[4] w-[6rem] h-[6rem]"
        />
        <div className="flex flex-col flex-1 text-base pl-12">
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
        <div className="flex flex-col flex-1 text-base pl-4">
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
      <div className="flex gap-4 py-6 max-md:flex-wrap sm:justify-content-between">
        <div className="flex-1  text-base  leading-5 text-slate-200 max-md:max-w-full m-auto">
          uteach @ 2023. All rights reserved.
        </div>
        <div className="flex gap-5 justify-around max-md:flex-wrap">
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
