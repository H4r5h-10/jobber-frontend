import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { object, string } from "yup";
import { useCookies } from "react-cookies";
import cookie from "react-cookies";
import { Context, server } from "../../main";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const loginSchema = object({
    email: string().email(),
    password: string().required(),
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    let validForm = await loginSchema.isValid({ email, password });
    if (!validForm) {
      console.log("Not valid");
      return;
    }
    const { data } = await axios.post(
      `${server}/users/login`,
      { email, password },
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
    }
    else console.log("Error");
  };
  if (isAuthenticated) {
    return <Navigate to="/jobboard" />;
  }

  return (
    <div className="flex">
      <div className="mt-16 sm:mx-32 grid lg:grid-cols-12 items-center p-6">
        <div className="sm:col-span-6">
          <img
            src="/plugin, puzzle, puzzles, pieces, man, people.svg"
            className="w-[30rem]"
          />
        </div>
        <div className="flex flex-col sm:col-span-6 gap-4 justify-center items-center align-middle">
          <h1 className="text-3xl text-center mt-3">Enter account details</h1>
          <div className="grid grid-cols-12 px-4 gap-4 mt-4">
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
                  id="price"
                  name="price"
                  type="text"
                  placeholder="example@example.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                  id="price"
                  name="price"
                  type="password"
                  placeholder="Minimum 8 characters long"
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md border-0 py-1.5 pl-2 sm:w-[30em] ring-1 ring-inset ring-gray-300  text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="col-span-6 p-2 w-32 text-white font-semibold rounded-lg bg-[#0A65CC] text-lg"
          >
            Login
          </button>

          <div className="text-center mt-4">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-900">
              Sign Up
            </Link>
          </div>
          {/* <Link to='/login'/> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

// export default function Example() {
//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-3 bg-slate-200/30 backdrop-blur-lg rounded-lg sm:mx-32 sm:mt-16 pb-6 mt-12 mx-10 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form action="#" method="POST" className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign in
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500">
//             Not a member?{' '}
//             <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }
