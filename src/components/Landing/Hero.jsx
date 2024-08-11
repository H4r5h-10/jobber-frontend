import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-[#F1F2F4]">
      <div className="mt-14 md:mx-32 p-3 flex flex-col lg:grid lg:grid-cols-12 text-center ">
        <div className=" border-gray-800 order-2 lg:order-1 lg:col-span-6 text-center lg:text-left flex flex-col gap-8">
          <h1 className="text-[3rem] font-medium">Grow your community.</h1>
          <h4 className="text-md font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            eaque quasi officiis neque accusantium facilis error reiciendis
            pariatur quis temporibus.
          </h4>
          <div className="flex flex-col gap-4 items-center lg:items-start">
          <Link to="/signup" state={'Candidate'}>
          <button className="h-12 text-white font-semibold rounded-lg w-56 bg-[#0A65CC] text-lg">
            Signup as Candidate
          </button>
          </Link>
          <button className="h-12 text-white rounded-lg font-semibold w-56 bg-[#0A65CC] text-lg ">
            Signup as Alumni
          </button>
          </div>
          <p className="text-sm font-normal text-[#0A65CC]">
            Meet talented individuals and teams.
          </p>
        </div>
        <div className="lg:order-2 order-1 border-gray-800 col-span-6 text-left justify-center flex">
          <img
            src="/plugin, puzzle, puzzles, pieces, man, people.svg"
            alt=""
            className="w-[30rem]"
          />
        </div>
        <div className="order-3 border-gray-800 grid col-span-12 md:grid-cols-6 lg:grid-cols-12 items-center justify-center gap-8 mx-auto lg:mt-0 mt-12">
          <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg  transition-all grid grid-cols-12 gap-4 items-center p-4 group">
            <div className="col-span-4">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
              />
            </div>
            <div className="col-span-8">
              <p>700+</p>
              <p>Alumni</p>
            </div>
          </div>
          <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg  transition-all grid grid-cols-12 gap-4 items-center p-4 group">
            <div className="col-span-4">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
              />
            </div>
            <div className="col-span-8 ">
              <p>300+</p>
              <p>Talented Students</p>
            </div>
          </div>
          <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg transition-all grid grid-cols-12 gap-4 items-center p-4 group">
            <div className="col-span-4">
              <FontAwesomeIcon
                icon={faBriefcase}
                className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
              />
            </div>
            <div className="col-span-8 ">
              <p>15+</p>
              <p>Job Categories</p>
            </div>
          </div>
          <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg transition-all grid grid-cols-12 gap-4 items-center p-4 group">
            <div className="col-span-4">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
              />
            </div>
            <div className="col-span-8 ">
              <p>1000</p>
              <p>Networking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
// import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
// import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// const Hero = () => {
//   return (
//     <div className="bg-[#F1F2F4]">
//       <div className="mt-14 md:mx-32 p-3 grid grid-cols-12 h-4/5 text-center ">
//         <div className=" border-gray-800 order-2 lg:order-1 lg:col-span-6  text-center lg:text-left flex flex-col gap-8">
//           <h1 className="text-[3rem] font-medium">Grow your community.</h1>
//           <h4 className="text-md font-normal">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
//             eaque quasi officiis neque accusantium facilis error reiciendis
//             pariatur quis temporibus.
//           </h4>
//           <button className="h-12 text-white font-semibold rounded-lg max-w-56 bg-[#0A65CC] text-lg">
//             Signup as Candidate
//           </button>
//           <button className="h-12 text-white rounded-lg font-semibold max-w-56 bg-[#0A65CC] text-lg ">
//             Signup as Alumni
//           </button>
//           <p className="text-sm font-normal text-[#0A65CC]">
//             Meet talented individuals and teams.
//           </p>
//         </div>
//         <div className="lg:order-2 order-1 border-gray-800 col-span-6 text-left justify-center flex">
//           <img
//             src="/plugin, puzzle, puzzles, pieces, man, people.svg"
//             alt=""
//             className="w-[30rem]"
//           />
//         </div>
//         <div className="order-3 border-gray-800 grid col-span-12 grid-cols-12 items-center justify-center gap-x-8 mx-auto ">
//           <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg  transition-all grid grid-cols-12 gap-4 items-center p-4 group">
//             <div className="col-span-4">
//               <FontAwesomeIcon
//                 icon={faGraduationCap}
//                 className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
//               />
//             </div>
//             <div className="col-span-8">
//               <p>700+</p>
//               <p>Alumni</p>
//             </div>
//           </div>
//           <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg  transition-all grid grid-cols-12 gap-4 items-center p-4 group">
//             <div className="col-span-4">
//               <FontAwesomeIcon
//                 icon={faBookOpenReader}
//                 className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
//               />
//             </div>
//             <div className="col-span-8 ">
//               <p>300+</p>
//               <p>Talented Students</p>
//             </div>
//           </div>
//           <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg transition-all grid grid-cols-12 gap-4 items-center p-4 group">
//             <div className="col-span-4">
//               <FontAwesomeIcon
//                 icon={faBriefcase}
//                 className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
//               />
//             </div>
//             <div className="col-span-8 ">
//               <p>15+</p>
//               <p>Job Categories</p>
//             </div>
//           </div>
//           <div className="rounded-lg col-span-3 w-60 bg-white/80 backdrop-blur-lg h-24 hover:shadow-lg transition-all grid grid-cols-12 gap-4 items-center p-4 group">
//             <div className="col-span-4">
//               <FontAwesomeIcon
//                 icon={faGlobe}
//                 className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-lg group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
//               />
//             </div>
//             <div className="col-span-8 ">
//               <p>1000</p>
//               <p>Networking</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
