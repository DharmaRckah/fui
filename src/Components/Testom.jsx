// import React from "react";

// const Testom = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-white shadow-lg">
//         <nav className="container mx-auto flex items-center justify-between p-4">
//           <div className="text-xl font-bold">Logo</div>
//           <ul className="flex">
//             <li className="mx-2">
//               <a href="#">Technology</a>
//             </li>
//             <li className="mx-2">
//               <a href="#">IT Consulting Services Dubai</a>
//             </li>
//             <li className="mx-2">
//               <a href="#">Infrastructure</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="container mx-auto py-8">
//         <section className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">Community</h2>
//           <p>Community investment and dedication</p>
//         </section>
//         <section className="mb-8">
//           <h2 className="text-2xl font-bold mb-4">
//             Our Sustainability Strategy
//           </h2>
//           <ul>
//             <li>Environmental Stewardship</li>
//             <ul>
//               <li>Emissions</li>
//               <li>Waste Management</li>
//               <li>Biodiversity</li>
//               <li>Climate Change</li>
//               <li>Energy Efficiency for Office Areas</li>
//             </ul>
//             <li>Culture & People</li>
//             <ul>
//               <li>Human Resources Management</li>
//               <li>Employee Welfare and Benefits</li>
//               <li>Non-discrimination and Diversity</li>
//               <li>Human Rights</li>
//             </ul>
//             <li>Health & Safety</li>
//             <ul>
//               <li>Occupational Health and Safety</li>
//               <li>Training and Development</li>
//               <li>Anti-piracy measures</li>
//             </ul>
//             <li>Conduct & Compliance</li>
//             <ul>
//               <li>Compliance</li>
//               <li>Security and Privacy</li>
//               <li>Supply Chain Management</li>
//               <li>Anti-corruption & Money Laundering</li>
//             </ul>
//           </ul>
//         </section>
//       </main>
//       <footer className="bg-gray-800 text-white text-center py-4">
//         Footer content here
//       </footer>
//     </div>
//   );
// };

// export default Testom;

import React from "react";
import image from "../assets/infrastructure/OurSustainabilityStrategy.png";

const OurStrategyImage = () => {
  return (
    <div className="main-div h-[300vh]  md:h-[125vh] bg-black p-8 relative flex items-center justify-center">
      <style>
        {`
      @media (max-width: 900px)
      <style>
      .main-div {
          height: 120vh;
      }
              @media (max-width: 647px) {
                  .main-div {
                      height: 420vh; 
                    }
                }
              @media (max-width: 561px) {
                  .main-div {
                      height: 145vh; 
                    }
                }
              @media (max-width: 380px) {
                  .main-div {
                      height: 165vh; 
                }
              @media (max-width: 290px) {
                  .main-div {
                      height: 185vh;
                    }
                }
                `}
      </style>
      <img
        src={image}
        alt="Loading"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 overflow-hidden">
        <h2 className="text-white text-2xl lg:text-3xl font-semibold text-center z-10 bg-black p-2 rounded opacity-60">
          Our Sustainability Strategy
        </h2>
        <div className="flex flex-wrap justify-center gap-4 z-10 opacity-60">
          <div className="bg-black rounded p-4 max-w-xs   md:max-w-sm lg:max-w-xs xl:max-w-sm">
            <h4 className="text-white text-lg lg:text-sm font-semibold">
              Community
            </h4>
            <p className="text-white lg:text-sm">Investment and Dedication</p>
          </div>
          <div className="bg-black rounded p-4 max-w-xs md:max-w-sm lg:max-w-xs sm:max-w-sm">
            <h4 className="text-white text-lg lg:text-sm font-semibold">
              Enviromental Stewardship
            </h4>
            <li className="text-white lg:text-sm">Emission</li>
            <li className="text-white lg:text-sm">Waste Management</li>
            <li className="text-white lg:text-sm">Biodiversity</li>
            <li className="text-white lg:text-sm">Climate Change</li>
            <li className="text-white lg:text-sm">
              Energy Efficiency for office Areas
            </li>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 z-10 opacity-60">
          <div className="bg-black rounded p-4 max-w-xs  md:max-w-sm lg:max-w-xs xl:max-w-sm">
            <h4 className="text-white text-lg lg:text-sm font-semibold">
              Culture & People{" "}
            </h4>
            <li className="text-white lg:text-sm">
              Human Resources Management
            </li>
            <li className="text-white lg:text-sm">
              Employee Weklfare and Benefits
            </li>
            <li className="text-white lg:text-sm">
              Non-discrimination and Diversity
            </li>
            <li className="text-white lg:text-sm">Human Rights</li>
          </div>
          <div className="bg-black rounded p-4 max-w-xs  md:max-w-sm lg:max-w-xs xl:max-w-sm">
            <h4 className="text-white text-lg lg:text-sm font-semibold">
              Conduct & Compliance
            </h4>
            <li className="text-white lg:text-sm">Compliance</li>
            <li className="text-white lg:text-sm">Security & Privecy </li>
            <li className="text-white lg:text-sm">Supply Chain Management</li>
            <li className="text-white lg:text-sm">
              Anti-corruption & Money Laundering
            </li>
          </div>
        </div>
        <div className="bg-black rounded p-4 max-w-sm md:max-w-sm lg:max-w-xs xl:max-w-sm opacity-60">
          <h4 className="text-white text-lg lg:text-sm font-semibold">
            Health & Safety
          </h4>
          <li className="text-white lg:text-sm">
            Occupational Health and Safety{" "}
          </li>
          <li className="text-white lg:text-sm">Training and Development</li>
          <li className="text-white lg:text-sm">Abty-piracy measures</li>
        </div>
      </div>
    </div>
  );
};

export default OurStrategyImage;
