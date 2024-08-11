"use client";

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../main";
import cookie from "react-cookies";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, setisAuthenticated } = useContext(Context);
  const handleLogout = () => {
    cookie.remove("jobAuthToken");
    setisAuthenticated(false);
  };
  return (
    <header className="lg:px-28 fixed top-0 bg-white/70 backdrop-blur-lg z-10 w-full">
      <nav
        aria-label="Global"
        className="flex max-w-7xl items-center justify-between p-4"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Profile</span>
            <img
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {isAuthenticated ? (
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/jobboard"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Find Jobs
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              My Dashboard
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Profile
            </Link>
          </PopoverGroup>
        ) : (
          ""
        )}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {isAuthenticated ? (
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleLogout}
            >
              Log out<span aria-hidden="true">&rarr;</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Profile</span>
              <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {isAuthenticated ? (
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Find Jobs
                  </Link>
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    My Dashboard
                  </Link>
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Profile
                  </Link>
                </div>
              ) : (
                ""
              )}
              <div className="py-6">
                {isAuthenticated ? (
                  <Link
                    to="/"
                    className="text-sm font-semibold leading-6 text-gray-900"
                    onClick={handleLogout}
                  >
                    Log out<span aria-hidden="true">&rarr;</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// "use client";
// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { Context } from "../../main";
// import cookie from "react-cookies";
// import { PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
// import { Popover } from "react-bootstrap";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";

// export default function Example() {
//   const { isAuthenticated, setisAuthenticated } = useContext(Context);
//   const products =['temp','kemp']
//   const callsToAction =['temp','kemp']
//   const handleLogout = () => {
//     cookie.remove("jobAuthToken");
//     setisAuthenticated(false);
//   };
//   return (
//     <header className="lg:px-28 fixed top-0 bg-white/70 backdrop-blur-lg z-10 w-full">
//       <nav
//         aria-label="Global"
//         className="mx-auto relative flex items-center justify-between p-4 sm:px-8 "
//       >
//         <div className="flex lg:flex-1">
//           <Link to="/" className="-m-1.5 p-1.5">
//             <span className="sr-only">Your Profile</span>
//             <img
//               alt=""
//               src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//               className="h-8 w-auto"
//             />
//           </Link>
//         </div>

//         <div className="flex flex-1 justify-end">
//           {isAuthenticated ? (
//             <Link
//               to="/"
//               className="text-sm font-semibold leading-6 text-gray-900"
//               onClick={handleLogout}
//             >
//               Log out<span aria-hidden="true">&rarr;</span>
//             </Link>
//           ) : (
//             <Link
//               to="/login"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Log in <span aria-hidden="true">&rarr;</span>
//             </Link>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }
