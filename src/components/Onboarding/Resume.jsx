import React from 'react'

const Resume = () => {
  return (
    <div className='mx-2 grid grid-cols-12 gap-4'>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 md:col-span-6 text-sm font-medium leading-6 text-black"
        >
          Resume 1 Title
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder="Tech/ Non Tech / Design Roles"
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 text-sm font-medium leading-6 text-black"
        >
          Resume 1 Link
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder="Google Drive Link"
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 text-sm font-medium leading-6 text-black"
        >
          Resume 2 Title
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder="Tech/ Non Tech / Design Roles"
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 col-span-12 md:col-span-6">
        <label
          htmlFor="first-name"
          className="col-span-6 text-sm font-medium leading-6 text-black"
        >
          Resume 2 Link
        </label>
        <div className="relative col-span-12 mt-2 rounded-md">
          <input
            name="First Name"
            // value={firstName}
            // onChange={(e)=>setFirstName(e.target.value)}
            type="text"
            placeholder="Google Drive Link"
            className="col-span-6 rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Resume
