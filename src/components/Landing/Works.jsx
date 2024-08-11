import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";

const Works = () => {
  return (
    <div className="mt-14 md:mx-32 p-3 lg:h-[80vh] flex items-center justify-center flex-col">
      <h1 className="font-semibold text-2xl self-center">How MCE-Job Works</h1>
      <div className="mt-14 md:grid flex flex-col md:grid-cols-2 lg:grid-cols-12 gap-4">
      <div className=" rounded-lg hover:bg-[#F1F2F4] hover:shadow-xl transition-colors group col-span-3 items-center justify-center text-center flex flex-col gap-8 p-4">
          <div>
            <FontAwesomeIcon
              icon={faUserPen}
              className="text-theme-blue w-8 h-8 bg-theme-light-blue p-4 rounded-full group-hover:text-theme-light-blue group-hover:bg-theme-blue transition-colors"
            />
          </div>
          <div className="text-xl font-semibold">Create Account</div>
          <div className="text-base fot-normal">
            MCE students sign up with their details.
          </div>
        </div>
        <div className="hidden lg:block absolute left-72 -translate-y-12">
          <img src="/Arrows.svg" alt="" />
        </div>
        <div className=" rounded-lg hover:bg-[#F1F2F4] hover:shadow-xl transition-colors group col-span-3 items-center justify-center text-center flex flex-col gap-8 p-4">
          <div>
            <FontAwesomeIcon
              icon={faIdCard}
              className="text-theme-blue w-8 h-8 bg-theme-light-blue p-4 rounded-full group-hover:text-theme-light-blue group-hover:bg-theme-blue transition-colors"
            />
          </div>
          <div className="text-xl font-semibold">Upload ID Card</div>
          <div className="text-base fot-normal">
            Upload Resume/CV and ID Card for verification.
          </div>
        </div>
        <div className="hidden lg:block absolute left-[33rem] rotate-180 scale-x-[-1] translate-y-60">
          <img src="/Arrows.svg" alt="" />
        </div>
        <div className=" rounded-lg hover:bg-[#F1F2F4] hover:shadow-xl transition-colors group col-span-3 items-center justify-center text-center flex flex-col gap-8 p-4">
          <div>
            <FontAwesomeIcon
              icon={faMagnifyingGlassPlus}
              className="text-theme-blue w-8 h-8 bg-[#E7F0FA] p-4 rounded-full group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
            />
          </div>
          <div className="text-xl font-semibold">Search Jobs</div>
          <div className="text-base fot-normal">
            Search jobs according to your skills.
          </div>
        </div>
        <div className="hidden lg:block absolute right-72 -translate-y-12">
          <img src="/Arrows.svg" alt="" />
        </div>
        <div className=" rounded-lg hover:bg-[#F1F2F4] hover:shadow-xl transition-colors group col-span-3 items-center justify-center text-center flex flex-col gap-8 p-4">
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="text-[#0A65CC] w-8 h-8 bg-[#E7F0FA] p-4 rounded-full group-hover:text-[#E7F0FA] group-hover:bg-[#0A65CC] transition-colors"
            />
          </div>
          <div className="text-xl font-semibold">Easy Apply</div>
          <div className="text-base fot-normal">
            Quick and hassle-free applications.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
