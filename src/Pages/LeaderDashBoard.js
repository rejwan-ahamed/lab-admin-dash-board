import React from "react";
import Header from "../Components/Header";

const Home = () => (
  <div className="bg-white duration-500 dark:bg-black">
    <Header></Header>
    {/* search the student my class roll */}
    <div className="main-wrapper px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
      <div className="group-details ">
        <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
          Group : <span className="text-violet-500 dark:text-[#ebff00]">A</span>
        </h1>
        <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
          welcome back leader :{" "}
          <span className="text-violet-500 dark:text-[#ebff00]">Rejwan Ahamed</span>
        </h1>

        <div className="all-questions mt-16">
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:text-[#ebff00] dark:border-[#ebff00]">
            All questions assign by group leader
          </h3>
         
          <div className="question body border-b py-3">
            <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center">
              <h2 className="dark:text-white">Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-red-600 dark:text-white dark:hover:text-[#ebff00]"
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
              <h2 className="dark:text-white">Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-red-600 dark:text-white dark:hover:text-[#ebff00]"
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
              <h2 className="dark:text-white">Random question for ans</h2>
              <div className="delete-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer duration-300 hover:text-red-600 dark:text-white dark:hover:text-[#ebff00]"
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
          <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:text-[#ebff00] dark:border-[#ebff00]">
            All group member status
          </h3>

          <div class="relative overflow-x-auto">
            <table class="border border-black w-full text-sm text-left text-black dark:text-white dark:border-white">
              <thead class="text-xs text-black uppercase border-b border-black dark:text-white dark:border-b-white">
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
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Leader</td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Leader</td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </td>
                </tr>
                <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    A
                  </th>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Rejwan</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">106</td>
                  <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">Leader</td>
                  <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                      <div
                        className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
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
