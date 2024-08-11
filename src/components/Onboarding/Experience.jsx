import React from 'react'
import { Form } from 'react-bootstrap'

const Experience = () => {
  return (
    <div className='grid-cols-12 grid gap-4'>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 text-sm font-medium leading-6 text-black"
        >
          Company Name
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder=""
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 text-sm font-medium leading-6 text-black"
        >
          Duration 
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder="In Months"
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
      <div className="col-span-6 flex flex-col">
          <label
            htmlFor="first-name"
            className="text-sm font-medium leading-6 text-black"
          >
            Experience Type
          </label>
          <Form.Select
            size="lg"
            className="rounded-md mt-2 border-0 py-2 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
            // value={selectedType}
            // onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>Select</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
          </Form.Select>
        </div>
    </div>
  )
}

export default Experience
