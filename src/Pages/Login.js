import React from "react";

const Login = () => {
  return (
    <div>
      <div className="login-main w-full flex flex-col justify-center items-center h-screen xl:h-screen font-general">
        <h1 className="text-[25px] font-general font-[600] text-left mb-10 dark:text-white">Open Source <sup className="font-[550]">beta</sup></h1>
        <form className="w-[18rem] text-left">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="text-black font-[500] bg-gray-50 border border-gray-300 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
              placeholder="john.doe@company.com"
              required
            />
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
              placeholder="•••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:border-[#ebff00] dark:text-black dark:hover:bg-transparent dark:duration-500 dark:hover:text-white "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
