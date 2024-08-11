import React, { useContext, useEffect, useState } from "react";
import JobCard from "./JobCard";
import { Context, server } from "../../main";
import { Navigate } from "react-router-dom";
import cookie from "react-cookies";
import axios from "axios";
import {Form} from 'react-bootstrap'

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [condition, setCondition] = useState("job_role");
  const [conditionName, setConditionName] = useState("");
  const { isAuthenticated } = useContext(Context);
  const token = cookie.load("jobAuthToken");
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    axios
      .get(`${server}/jobs/topdetails`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredential: true,
      })
      .then((res) => setJobs(res.data.data));
  }, []);
  const getFilter = () =>{
    switch (condition){
      case "job_role":
        return "Role"
      case "job_location":
        return "Location"
      case "job_type":
        return "Type"
    }
  }
  return (
    <div className="mt-32 md:mx-12 lg:mx-32 p-4 grid grid-cols-12 gap-5">
      <div className="col-span-12 grid grid-cols-12">
      <input type="text" className="border-2 col-span-9 p-3 rounded-md" placeholder={`Search Jobs by ${getFilter()}`} value={conditionName} onChange={(e)=>setConditionName(e.target.value.toLowerCase())}/>
      <Form.Select
                size="lg"
                className="col-span-3 border-2 rounded-md"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}  
              >
                <option value="job_role">Filter By: </option>
                <option value="job_location">Location</option>
                <option value="job_type">Type</option>
                <option value="job_role">Role</option>
              </Form.Select>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-12">
        {jobs && jobs.map((job) => {
          if(job[condition].toLowerCase().includes(conditionName)) return <JobCard job={job} key={job.job_id} />;
        })}
      </div>
    </div>
  );
};

export default JobBoard;
