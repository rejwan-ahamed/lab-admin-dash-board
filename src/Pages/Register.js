import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="register-wrapper-main block sm:flex">
        <div className="left-side w-full lg:w-[50%]">
          <div className="have-account border-b py-4 font-general font-[500] flex justify-center cursor-pointer bg-gray-50 sticky top-0 dark:bg-black dark:text-white">
            <h3 className="flex">
              Already have an account
              <Link to={'/student_login'} className="ml-2 flex gap-1 text-violet-600 rounded-full bg-violet-100 px-2 duration-500 hover:bg-violet-200 dark:bg-[#ebff00] dark:text-black">
                {" "}
                login
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>{" "}
            </h3>
          </div>
          <div className="login-main w-full flex flex-col justify-center items-center h-screen sm:h-screen font-general">
            <h1 className="text-[25px] font-general font-[600] text-left mb-10 dark:text-white">
              Open Source <sup className="font-[550]">beta</sup>
            </h1>
            <form className="w-[18rem] text-left">
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="email"
                  className="text-black font-[500] bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
                  placeholder="test subject 24"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Roll
                </label>
                <input
                  type="number"
                  id="email"
                  className="text-black font-[500] bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>

              {/* select group section */}
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select group
              </label>
              <select
                id="countries"
                class="font-[500] mb-6 h-[2.5rem] rounded-sm border border-gray-300 text-gray-900 text-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
              >
                <option selected>Select group</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>

              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
                  placeholder="•••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:border-[#ebff00] dark:text-black dark:hover:bg-transparent dark:hover:text-[#ebff00] dark:duration-500"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <div className=" right-side w-[50%] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/65552f153671777.6339ccd4345eb.jpg')] bg-cover bg-no-repeat bg-center hidden xl:block"></div>
      </div>
    </div>
  );
};

export default Register;
