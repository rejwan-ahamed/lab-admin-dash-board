import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "../Components/Header";
import domain from "../hooks/domain";

const LeaderDashBoard = () => {
  const [groupQuestion, setGroupQuestion] = useState([]);
  const [groupData, setGroupData] = useState([]);
  const [userLength, setUserLength] = useState();
  const [groupLength, setGroupLength] = useState();
  const navigate = useNavigate();
  const width = 20;
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );

  useEffect(() => {
    if (userLocalStorageData?.status !== "Leader") {
      navigate("/student_login");
    }
  }, []);

  useEffect(() => {
    fetch(domain + `/get_all_register?group=${userLocalStorageData?.groupName}`)
      .then((res) => res.json())
      .then((result) => setGroupData(result));
  }, []);

  const deleteData = (e) => {
    // console.log(e);
    fetch(domain + `/delete_question?id=${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.error("your question has been deleted");
      });
  };

  // getting value by group
  fetch(
    domain +
      `/get_group_question_name?groupName=${userLocalStorageData?.groupName}`
  )
    .then((res) => res.json())
    .then((result) => setGroupLength(result.questions.length));
  // console.log(groupData);

  // getting all question for the single leader by group
  fetch(
    domain +
      `/get_group_question?roll=${userLocalStorageData?.roll}&groupName=${userLocalStorageData?.groupName}`
  )
    .then((res) => res.json())
    .then((result) => setGroupQuestion(result.questions));
  return (
    <div className="bg-white duration-500 dark:bg-black">
      <Header></Header>
      {/* search the student my class roll */}
      <div className="main-wrapper px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
        <div className="group-details ">
          <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
            Group :{" "}
            <span className="text-violet-500 dark:text-[#ebff00]">
              {userLocalStorageData?.groupName}
            </span>
          </h1>
          <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
            welcome back leader :{" "}
            <span className="text-violet-500 dark:text-[#ebff00]">
              {userLocalStorageData?.name}
            </span>
          </h1>

          <div className="all-questions mt-16">
            <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:text-[#ebff00] dark:border-[#ebff00]">
              All questions assign by group leader
            </h3>
            {groupQuestion?.map((data) => (
              <>
                <div className="question body border-b py-3">
                  <div className="question-main font-general text-xl text-left font-[500] flex justify-between items-center">
                    <h2 className="dark:text-white">{data?.question}</h2>
                    <div className="icon-group flex items-center gap-1 sm:gap-3 ">
                      <Link to={`/update/${data.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.6}
                          stroke="currentColor"
                          className="border-2 rounded-full border-black w-5 h-5 duration-500 cursor-pointer hover:border-orange-500 hover:text-orange-500 dark:text-white dark:border-white dark:hover:text-orange-500 dark:hover:border-orange-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      </Link>

                      {/* this delete  button is dis-active */}
                      {/* <button onClick={() => deleteData(data.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 cursor-pointer duration-300 hover:text-red-600 dark:text-white dark:hover:text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button> */}
                    </div>
                  </div>
                </div>
              </>
            ))}
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
                    <th scope="col" class="px-2 py-3">
                      %
                    </th>
                    <th scope="col" class="px-1 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {groupData?.map((data) => (
                    <tr class="bg-white border-b border-black dark:border-white dark:bg-black">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data?.groupName}
                      </th>
                      <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                        {data?.name}
                      </td>
                      <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                        {data?.roll}
                      </td>
                      <td class="px-6 py-4 text-violet-500 font-[500] dark:text-[#ebff00]">
                        {data?.status}
                      </td>
                      <td class="px-3 py-4 text-violet-500 font-[500] dark:text-[#ebff00] border-l border-black sm:px-6 dark:border-l-white">
                        <div class=" w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-500">
                          <div
                            className="bg-violet-600 h-2.5 rounded-full duration-500 dark:bg-[#ebff00]"
                            style={{
                              width: `${data?.submition>100?100:data?.submition}%`,
                            }}
                          ></div>
                        </div>
                      </td>
                      <td class=" border-black px-2 py-4 text-violet-500 font-[500] dark:text-[#ebff00] dark:border-l-white">
                        {data?.submition>100?100:data?.submition}%
                      </td>
                      <td class="flex justify-center border-l border-black px-2 py-4 text-violet-500 font-[500] dark:text-[#ebff00] dark:border-l-white">
                        <Link to={`/allANS/${data?.roll}`}>
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
                              d="M4.5 15.75l7.5-7.5 7.5 7.5"
                            />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderDashBoard;
