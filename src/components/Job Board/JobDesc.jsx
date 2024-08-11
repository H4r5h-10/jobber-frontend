import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faStopwatch, faBookOpen, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLocation } from "react-router-dom";

const JobDesc = () => {
  // const params = useParams();
  const job = useLocation().state;
  // console.log(job.salary_rep);
  //1 call to job description
  const jobDesc = {
    _id: 1,
    description:
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere nisi sapiente veniam laborum odit ut maxime ex hic reprehenderit harum labore, ducimus id ipsam. Dolorum ducimus est, illum dignissimos voluptatem sit saepe cumque ratione repellat tempora quod ex nemo repellendus recusandae minus doloribus fugiat eum laboriosam dolor asperiores. Eligendi quod commodi quos repudiandae, eaque eum aut facilis impedit. Autem!,",
    requirements:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere nisi sapiente veniam laborum odit ut maxime ex hic reprehenderit harum labore, ducimus id ipsam. Dolorum ducimus est, illum dignissimos voluptatem sit saepe cumque ratione repellat tempora quod ex nemo repellendus recusandae minus doloribus fugiat eum laboriosam dolor asperiores. Eligendi quod commodi quos repudiandae, eaque eum aut facilis impedit. Autem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere nisi sapiente veniam laborum odit ut maxime ex hic reprehenderit harum labore, ducimus id ipsam. Dolorum ducimus est, illum dignissimos voluptatem sit saepe cumque ratione repellat tempora quod ex nemo repellendus recusandae minus doloribus fugiat eum laboriosam dolor asperiores. Eligendi quod commodi quos repudiandae, eaque eum aut facilis impedit. Autem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere nisi sapiente veniam laborum odit ut maxime ex hic reprehenderit harum labore, ducimus id ipsam. Dolorum ducimus est, illum dignissimos voluptatem sit saepe cumque ratione repellat tempora quod ex nemo repellendus recusandae minus doloribus fugiat eum laboriosam dolor asperiores. Eligendi quod commodi quos repudiandae, eaque eum aut facilis impedit. Autem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum facere nisi sapiente veniam laborum odit ut maxime ex hic reprehenderit harum labore, ducimus id ipsam. Dolorum ducimus est, illum dignissimos voluptatem sit saepe cumque ratione repellat tempora quod ex nemo repellendus recusandae minus doloribus fugiat eum laboriosam dolor asperiores. Eligendi quod commodi quos repudiandae, eaque eum aut facilis impedit. Autem!",
    link: "",
    skills: ["C++", "Webdev"],
    salary_rep:"Monthly",
    education_level: "Bachelors"
  };
  //#098023
  return (
    <div className="mt-24 md:mx-12 lg:mx-32 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 h-[80vh]">
      <div className="col-span-12 flex flec-row justify-between">
      <h1 className="text-3xl col-span-12">{job.job_role}</h1>
      <button className="order-4 justify-self-center lg:order-none col-span-12 h-12 lg:justify-self-end text-white font-semibold rounded-lg w-44 lg:w-56 bg-[#0A65CC] text-lg">
          Apply Now 	&#8594;
        </button>
      </div>
      <div className="col-span-6 flex flex-col gap-4">
       <div className="flex flex-col gap-3">
       <div className="flex flex-row gap-2">
       <h1 className="text-lg text-[#5E6670]"> at {job.job_company}</h1>
       <p className='text-xs bg-[#098023] text-[#9DD9AB] font-semibold uppercase p-1 rounded-sm self-center'>{job.job_type}</p>
       </div>
       </div>
        <h1 className="text-2xl font-semibold">{job.company}</h1>
        {jobDesc.link ? (
          <div>
            <h1 className="font-semibold">Job Description and Requirements:</h1>
            <a href="https://www.google.com" target="__blank">
              {jobDesc.link}
            </a>
          </div>
        ) : (
          <div>
            <h1 className="text-lg font-semibold mb-2">Job Description</h1>
            <p className="mb-3">{jobDesc.description}</p>
            <h1 className="text-lg font-semibold mb-2">Requirements</h1>
            <p>{jobDesc.requirements}</p>
          </div>
        )}
      </div>
      <div className="col-span-6 grid grid-cols-12 gap-4">
        
        <div className="col-span-12 border-4 border-theme-light-blue rounded-lg flex flex-row justify-evenly items-center">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-lg font-semibold">Salary (INR)</p>
            <p className="text-xl text-[#098023] font-semibold">
            ₹{job.job_stipendmin} -  ₹{job.job_stipendmax}
            </p>
            <p className="text-[#5E6670]">{jobDesc.salary_rep} Salary</p>
          </div>
          <div className="border-2 border-theme-light-blue h-32 w-1"></div>
          <div className="flex flex-col gap-2 text-center">
            <div>
              <FontAwesomeIcon className="w-8 h-8" icon={faMap} />
            </div>
            <p className="text-xl font-semibold">Job Location</p>
            <p className="text-[#5E6670]">{job.job_location}</p>
          </div>
        </div>
        <div className="col-span-12 flex flex-col border-4 rounded-lg gap-4 p-4 border-theme-light-blue">
          <h1 className="text-xl font-semibold">Job Overview</h1>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4">
              <p><FontAwesomeIcon className="w-7 h-7 text-theme-blue" icon={faStopwatch} /></p>
              <p className="text-[#5E6670] uppercase text-sm">Apply Till:</p>
              <p className="font-semibold">{job.job_deadline.substring(0,10)}</p>
            </div>
            <div className="col-span-4">
              <p><FontAwesomeIcon className="w-7 h-7 text-theme-blue" icon={faBookOpen} /></p>
              <p className="text-[#5E6670] uppercase text-sm">Degree:</p>
              <p className="font-semibold">{jobDesc.education_level}</p>
            </div>
            <div className="col-span-4">
              <p><FontAwesomeIcon className="w-7 h-7 text-theme-blue" icon={faLayerGroup} /></p>
              <p className="text-[#5E6670] uppercase text-sm">Job Level:</p>
              <p className="font-semibold">{job.job_type}</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 flex flex-col border-4 rounded-lg gap-4 p-4 border-theme-light-blue">
          <h1 className="text-xl font-semibold">Skills Required</h1>
            <div className="flex flex-row gap-1">
              {jobDesc.skills.map((skill)=>{
                return <p key={skill} className='text-xs text-[#098023] bg-[#9DD9AB] font-semibold uppercase p-1 rounded-sm self-center'>{skill}</p>
              })}
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
