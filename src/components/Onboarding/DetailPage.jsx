import React, { createContext, useContext, useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Resume from "./Resume";
import Experience from "./Experience";
import Skills from "./Skills";
import { Context } from "../../main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFile,
  faGears,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

export const pageContext = createContext({ page: 1 });

const DetailPage = () => {
  const [page, setPage] = useState(1); // Default page to render
  const { isAuthenticated } = useContext(Context);
  // Function to render the correct component based on the selected tab
  const renderPage = () => {
    switch (page) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Resume />;
      case 3:
        return <Skills />;
      case 4:
        return <Experience />;
      default:
        return <PersonalDetails />;
    }
  };

  if (!isAuthenticated) return <Navigate to="/" />;
  return (
    <pageContext.Provider value={{ page, setPage }}>
      <div className="grid grid-cols-12 md:mx-12 mt-20 lg:mx-32 ">
        <div className="col-span-12 grid grid-cols-12 justify-between items-center border-b-2 border-gray-950">
          <button
            onClick={() => setPage(1)}
            className={`col-span-3 p-2 text-center ${
              page === 1
                ? "border-b-2 text-theme-blue border-b-theme-blue"
                : "text-gray-700 border-b-2 border-b-text-gray-700"
            }`}
          >
            <div className="text-center items-center justify-center self-center flex gap-4 text-xl font-semibold">
              <FontAwesomeIcon icon={faUser} className="w-6 h-6 " /> Personal
            </div>
          </button>
          <button
            onClick={() => setPage(2)}
            className={`col-span-3 p-2 text-center ${
              page === 2
                ? "border-b-2 text-theme-blue border-b-theme-blue"
                : "text-gray-700 border-b-2 border-b-text-gray-700"
            }`}
          >
            <div className="text-center items-center justify-center self-center flex gap-4 text-xl font-semibold">
              <FontAwesomeIcon icon={faFile} className="w-6 h-6 " />
              Resume
            </div>
          </button>
          <button
            onClick={() => setPage(3)}
            className={`col-span-3 p-2 text-center ${
              page === 3
                ? "border-b-2 text-theme-blue border-b-theme-blue"
                : "text-gray-700 border-b-2 border-b-text-gray-700"
            }`}
          >
            <div className="text-center items-center justify-center self-center flex gap-4 text-xl font-semibold">
              <FontAwesomeIcon icon={faGears} className="w-6 h-6 " />
              Skills
            </div>
          </button>
          <button
            onClick={() => setPage(4)}
            className={`col-span-3 p-2 text-center ${
              page === 4
                ? "border-b-2 text-theme-blue border-b-theme-blue"
                : "text-gray-700 border-b-2 border-b-text-gray-700"
            }`}
          >
            <div className="text-center items-center justify-center self-center flex gap-4 text-xl font-semibold">
              <FontAwesomeIcon icon={faCity} className="w-6 h-6 " />
              Experience
            </div>
          </button>
        </div>
        <div className="col-span-12 mt-14">{renderPage()}</div>
      </div>
    </pageContext.Provider>
  );
};

export default DetailPage;
