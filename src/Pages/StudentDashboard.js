import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const StudentDashboard = () => (
  <div>
    <Header></Header>
    {/* search the student my class roll */}
    <div className="main-wrapper px-20">
      <div className="group-details px-20 py-20">
        <div className="upper-part flex justify-between items-center">
          <div className="left-part">
            <h1 className="text-2xl font-general text-left font-[500]">
              Member of group : <span className="text-violet-500">A</span>
            </h1>
            <h1 className="text-2xl font-general text-left font-[500]">
              Welcome back :{" "}
              <span className="text-violet-500">Rejwan Ahamed</span>
            </h1>
          </div>

          <div className="right-part">
            <h4 className="bg-violet-600 px-5 py-2 rounded-full font-general text-xl font-[550] max-w-max text-white">100%</h4>
          </div>

        </div>

        <div className="all-questions mt-16">
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max">
            All questions assign by group leader
          </h3>
          <div className="question body border-b py-3 px-3 duration-300 cursor-pointer hover:bg-gray-100 ">
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
                  className="w-6 h-6 cursor-pointer duration-500 hover:text-violet-600"
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
          <div className="question body border-b py-3 px-3 duration-300 cursor-pointer hover:bg-gray-100 ">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center ">
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-500 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="question body border-b py-3 px-3 duration-300 cursor-pointer hover:bg-gray-100 ">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center ">
              <h2>Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-500 hover:text-violet-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboard;
