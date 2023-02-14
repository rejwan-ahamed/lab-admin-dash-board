import React from "react";
import Header from "../Components/Header";

const Home = () => (
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
      <div className="create-group-main flex font-general px-20 border-b">
        <div className="left-part border-r py-20 w-[40%]">
          <form action="" className="flex flex-col items-start">
            <h2 className="font-[500] text-xl mb-3">Create A new group</h2>
            <div className="group-filed flex flex-col w-[80%]">
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

          <p className="text-left text-violet-600 mt-4 w-[90%] font-[500]">
            ** Enter enter a valid group name for ex:(A) and assign a valid roll
            to create a group leader for the group.
          </p>
        </div>
        {/* right side */}
        <div className="middle-part py-20 pl-20 w-[50%] flex flex-col justify-center border-r">
          <h1 className="text-center">will show all the group list</h1>
          <img src="/images/group.svg" className="w-[18rem]" alt="" srcset="" />
        </div>
        <div className="right-part py-20 pl-10 w-[40%] flex flex-col items-center justify-center">
          <form action="" className="flex flex-col items-start">
            <h2 className="font-[500] text-xl mb-3">Update group leader</h2>
            <div className="group-filed flex flex-col w-[18rem]">
              <select
                id="countries"
                class="h-[3rem] rounded-t-lg border-b-0 bg-gray-50 border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select group</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <input
                type="text"
                name=""
                id=""
                placeholder="Previous group leader roll"
                className="h-[3rem] hover:ring-violet-600"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="New group leader roll"
                className="h-[3rem] border-y-0 hover:ring-violet-600"
              />
              <button
                type="text"
                name=""
                id=""
                className="h-[3rem] rounded-b-lg bg-violet-600 text-white hover:ring-violet-600"
              >
                Update
              </button>
            </div>
          </form>

          <p className="text-left text-violet-600 mt-4 w-[90%] font-[500]">
            ** Enter previous group leader roll and new group leader roll to update group.
          </p>
        </div>
      </div>

      <div className="group-details px-20 py-20">
        {/* select group */}
        <div className="select-group-details w-[15rem] text-left font-general">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-black text-gray-900 text-sm rounded-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="group-table-list mt-10 font-general">
          <div class="relative overflow-x-auto">
            <table class="border border-black w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase border-b border-black">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    group name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Student name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Roll
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Task status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b border-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Leader</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] border-l border-black">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-300"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Leader</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] border-l border-black">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-300"
                        style={{ width: "5%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500]">Leader</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] border-l border-black">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
