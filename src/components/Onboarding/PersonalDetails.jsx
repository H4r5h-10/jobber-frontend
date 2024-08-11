import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { pageContext } from "./DetailPage";
import axios from "axios";

const PersonalDetails = () => {
  const {page, setPage} = useContext(pageContext);
  const [roll, setRoll] = useState();
  const [gender, setGender] = useState();
  const [website, setWebsite] = useState();
  const [cgpa, setCgpa] = useState();
  const [degree, setDegree] = useState();
  const [isdisabled, setDisabled] = useState(roll&&gender&&website&&cgpa&&degree);
  useEffect(()=>{
    setDisabled(roll&&gender&&website&&cgpa&&degree);
  },[roll,gender,website,cgpa,degree])
  return (
    <div className="mx-2 grid grid-cols-12 justify-center items-center gap-4">
        <div className="col-span-6">
        <label
          htmlFor="first-name"
          className="text-sm font-medium leading-6 text-black"
        >
          Roll Number
        </label>
        <div className="relative mt-2 rounded-md w-full col-span-6">
          <input
            name="RollNumber"
            value={roll}
            onChange={(e)=>setRoll(e.target.value)}
            type="text"
            placeholder=""
            className="rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
        </div>
        <div className="col-span-6 flex flex-col">
          <label
            htmlFor="gender"
            className="text-sm font-medium leading-6 text-black"
          >
            Gender
          </label>
          <Form.Select
            size="lg"
            className="rounded-md mt-2 border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Others</option>
          </Form.Select>
        </div>
      <div className="grid grid-cols-12 col-span-12">
        <label
          htmlFor="website"
          className="col-span-12 text-sm font-medium leading-6 text-black"
        >
          Personal Website Link
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            type="text"
            placeholder=""
            className="col-span-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
        <div className="flex col-span-12"><p className="italic text-sm">Don't have a website? Create one at QuickCV</p></div>
      </div>
      <div className="col-span-6">
        <label
          htmlFor="cgpa"
          className="text-sm font-medium leading-6 text-black"
        >
          CGPA
        </label>
        <div className="relative mt-2 rounded-md w-full col-span-6">
          <input
            name="CGPA"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            type="text"
            placeholder=""
            className="rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
        </div>
        <div className="col-span-6 flex flex-col">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-6 text-black"
          >
            Degree
          </label>
          <Form.Select
            size="lg"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="rounded-md mt-2 border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
            // value={selectedType}
            // onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>Select</option>
            <option value="Bachelors">B. Tech.</option>
            <option value="Masters">M. Tech.</option>
          </Form.Select>
        </div>
        <div className="items-center justify-center text-right col-span-12 mt-10">
        <button
          disabled={!isdisabled}
          className={`p-2 w-32 text-white font-semibold rounded-lg bg-[#0A65CC] text-lg disabled:bg-slate-600 disabled:pointer-events-none`}
          onClick={() => setPage(2)}
        >
          Continue &#8594;
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
