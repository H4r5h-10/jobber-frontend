import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import JobDesc from './JobDesc';

const JobCard = ({ job }) => {
  const str = "/jobdesc/"+job.job_id;

  return (
    <Link to={str} state={job} className='hover:bg-gradient-to-r hover:from-[#E7F0FA]/70 hover:shadow-md hover:cursor-pointer transition-all border-2 p-2 rounded-lg flex gap-12 md:gap-8'>
      <div>
      <h2 className='text-lg font-semibold mb-2'>{job.job_role}</h2>
      <div className='flex sm:flex-row md:flex-col lg:flex-row gap-2 mb-2 md:items-start lg:items-center sm:items-center'>
      <p className='text-xs text-[#098023] bg-[#9DD9AB] font-semibold uppercase p-1 rounded-sm'>{job.job_type}</p>
      <p className='text-sm text-slate-400'>Salary: {Math.ceil(job.job_stipendmin/1000)}K - {Math.ceil(job.job_stipendmax/1000)}K</p>
      </div>
      <p className='text-sm'><FontAwesomeIcon icon={faBuilding} className='mr-2' />{job.job_company}</p>
      <p className='text-sm '><FontAwesomeIcon icon={faLocationDot} className='mr-2' />{job.job_location}</p>
      </div>
      {/* <div className='border-2 flex items-center justify-center text-center flex-col gap-4 text-lg bg-[#E7F0FA] p-1 rounded-lg'> */}
      {/* <FontAwesomeIcon icon={faCalendarDays} className=' w-6 h-6' /> */}
      {/* <p className='text-sm'>{job.job_deadline.substring(0,10)}</p> */}
      {/* <p className='text-sm'>30 days Left</p> */}
      {/* </div> */}

    </Link>
  );
};  

export default JobCard;
