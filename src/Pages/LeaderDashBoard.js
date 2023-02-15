import React from "react";
import Header from "../Components/Header";

const Home = () => (
  <div>
    <Header></Header>
    {/* search the student my class roll */}
    <div className="main-wrapper px-20">
      <div className="group-details px-20 py-20">
        <h1 className="text-2xl font-general text-left font-[500]">
          Group : <span className="text-violet-500">A</span>
        </h1>
        <h1 className="text-2xl font-general text-left font-[500]">
          welcome back leader :{" "}
          <span className="text-violet-500">Rejwan Ahamed</span>
        </h1>

        <div className="all-questions mt-16">
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max">All questions assign by group leader</h3>
          <div className="question body border-b py-3">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center">
              <h2>Random question for ans</h2>
              <div className="delete-icon">
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
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="question body border-b py-3">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center">
              <h2>Random question for ans</h2>
              <div className="delete-icon">
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
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="question body border-b py-3">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center">
              <h2>Random question for ans</h2>
              <div className="delete-icon">
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
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="group-table-list font-general mb-8 mt-16">
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max">All questions assign by group leader</h3>
 
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
