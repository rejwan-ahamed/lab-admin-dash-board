import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const StudentDashboard = () => (
  <div className="bg-white dark:bg-black duration-500">
    <Header></Header>
    {/* search the student my class roll */}
    <div className="main-wrapper px-4 py-10 lg:py-20 lg:px-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
      <div className="group-details ">
        <div className="upper-part block justify-between items-center sm:flex">
          <div className="left-part">
            <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
              Member of group :{" "}
              <span className="text-violet-500 dark:text-[#ebff00]">A</span>
            </h1>
            <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
              Welcome back :{" "}
              <span className="text-violet-500 dark:text-[#ebff00]">
                Rejwan Ahamed
              </span>
            </h1>
          </div>

          <div className="right-part mt-6 sm:mt-0">
            <h4 className="bg-violet-600 px-5 py-2 rounded-full font-general text-xl font-[550] max-w-max text-white dark:bg-[#ebff00] dark:text-black">
              100%
            </h4>
          </div>
        </div>

        <div className="all-questions mt-16">
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:border-[#ebff00] dark:text-[#ebff00]">
            All questions assign by group leader
          </h3>

          <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
            <Link
              to={"/ans"}
              className="question-main font-general text-xl text-left font-[500] flex justify-between items-center "
            >
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
            <Link
              to={"/ans"}
              className="question-main font-general text-xl text-left font-[500] flex justify-between items-center "
            >
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
            <Link
              to={"/ans"}
              className="question-main font-general text-xl text-left font-[500] flex justify-between items-center "
            >
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
          <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
            <Link
              to={"/ans"}
              className="question-main font-general text-xl text-left font-[500] flex justify-between items-center "
            >
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
