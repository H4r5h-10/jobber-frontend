import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import cookie from "react-cookies";
import axios from "axios";
import { Context, server } from "../../main";

const Login = () => {
  const [selectedType, setSelectedType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${server}/users/register`,
      {
        firstname: firstName,
        lastname: lastName,
        email,
        password,
        type: selectedType,
      },
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    if (data.success) {
      cookie.save("jobAuthToken", data.token, {
        path: "/",
        maxAge: 2 * 24 * 60 * 60,
        secure: true,
        httpOnly: false,
      });
      setIsAuthenticated(true);
    } else {
      console.log(data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/details" />;
  }
  return (
    <div className="mt-16 sm:mx-32 grid lg:grid-cols-12 p-6">
      <div className="col-span-6">
        <img
          src="/public/plugin, puzzle, puzzles, pieces, man, people.svg"
          className="w-[30rem]"
        />
      </div>
      <div className="flex flex-col col-span-6 gap-4 justify-center items-center">
        <h1 className="text-3xl text-center mt-3">Sign up</h1>
        <p>Fill the form and get Started!</p>
        <div className="grid sm:grid-cols-12 px-4 gap-4 mt-4">
          <div className="sm:col-span-6 col-span-12">
            <label
              htmlFor="first-name"
              className="text-sm font-medium leading-6 text-black"
            >
              First Name
            </label>
            <div className="relative mt-2 rounded-md">
              <input
                name="First Name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                type="text"
                placeholder=""
                className="rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-6">
            <label
              htmlFor="price"
              className="text-sm font-medium leading-6 text-black"
            >
              Last Name
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center"></div>
              <input
                name="Last Name"
                type="text"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder=""
                className="rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-12">
            <label
              htmlFor="price"
              className="text-sm font-medium leading-6 text-black"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              </div> */}
              <input
                name="Email"
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="example@example.com"
                className="rounded-md border-0 py-1.5 pl-2 sm:w-[30em] ring-1 ring-inset ring-gray-300  text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-12">
            <label
              htmlFor="price"
              className="text-sm font-medium leading-6 text-black"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              </div> */}
              <input
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Minimum 8 characters long"
                className="rounded-md border-0 py-1.5 pl-2 sm:w-[30em] ring-1 ring-inset ring-gray-300  text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-12">
            <label
              htmlFor="price"
              className="text-sm font-medium leading-6 text-black"
            >
              I am a
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
              </div> */}
              <Form.Select
                size="lg"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>Select a Role</option>
                <option value="Candidate">Candidate</option>
                <option value="Employer">Employer</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <button
          className="col-span-6 p-2 w-32 text-white font-semibold rounded-lg bg-[#0A65CC] text-lg"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <div className="text-center">
          Already a member?{" "}
          <Link to="/login" className="text-blue-900">
            Log in
          </Link>
        </div>
        {/* <Link to='/login'/> */}
      </div>
    </div>
  );
};

export default Login;

