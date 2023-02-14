import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div>
      <Header></Header>
      {/* search the student my class roll */}
      <div className="main-wrapper px-20">
        <div className="search-student border-b px-20 font-general flex ">
          <div className="left-part border-r py-20 w-[50%]">
            <form action="" className="flex flex-col items-start w-[25rem]">
              <label htmlFor="student-roll" className="font-[500] text-xl mb-2">
                Student roll
              </label>
              <div className="search-main flex items-center gap-2 rounded-sm w-full">
                <input
                  type="number"
                  name="student-roll"
                  id=""
                  className="h-[2rem] border   focus:ring-violet-600"
                />
                <button className="bg-violet-200 h-[2rem] px-2 text-violet-600 border border-violet-500 rounded-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-3 w-[50%] font-[500]">
              ** Enter student class roll to get the details of the student.
              Please enter valid student roll.
            </p>
          </div>
          {/* right side */}
          <div className="right-part py-20 pl-20 w-[50%]">
            <h1 className="font-[500] text-violet-600 text-xl underline text-left mb-2">
              Student details
            </h1>
            <div className="student-details text-left">
              <p className="font-[500] text-violet-400 text-[18px]">
                Name: <span className="text-violet-600">Rejwan</span>
              </p>
              <p className="font-[500] text-violet-400 text-[18px]">
                Roll: <span className="text-violet-600">106</span>
              </p>
              <p className="font-[500] text-violet-400 text-[18px]">
                Section: <span className="text-violet-600">B</span>
              </p>
              <p className="font-[500] text-violet-400 text-[18px]">
                Status: <span className="text-violet-600">Leader</span>
              </p>
              <p className="font-[500] text-violet-400 text-[18px]">
                Task submission: <span className="text-violet-600">23</span>
              </p>
            </div>
          </div>
        </div>

        {/* create group */}
        <div className="create-group-main flex font-general px-20">
          <div className="left-part border-r py-20 w-[50%]">
            <form action="" className="flex flex-col items-start">
              <h2 className="font-[500] text-xl mb-3">Create A new group</h2>
              <div className="group-filed flex flex-col w-[20rem]">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="group name"
                  className="h-[3rem] rounded-t-lg hover:ring-violet-600"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="group leader roll"
                  className="h-[3rem] border-y-0 hover:ring-violet-600"
                />
                <button
                  type="text"
                  name=""
                  id=""
                  placeholder="group name"
                  className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600"
                >
                  Create group
                </button>
              </div>
            </form>

            <p className="text-left text-violet-600 mt-4 w-[50%] font-[500]">
              ** Enter enter a valid group name for ex:(A) and assign a valid
              roll to create a group leader for the group.
            </p>
          </div>
          {/* right side */}
          <div className="right-part py-20 pl-20 w-[50%] flex justify-center">
            <img
              src="/images/group.svg"
              className="w-[18rem]"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
