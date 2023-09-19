import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "../Components/Header";
import domain from "../hooks/domain";

const StudentDashboard = () => {
  const [agree, setAgree] = useState();
  const navigate = useNavigate();
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );

  // react query start here

  useEffect(() => {
    fetch(
      domain +
        `/search_condition?roll=${userLocalStorageData.roll}&question=Terms and conditions`
    )
      .then((res) => res.json())
      .then((result) => setAgree(result.length));
  }, []);

  const {
    data: categorys,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(domain + `/single_ans_comments?id=${1}`).then((res) => res.json()),
  });

  // react query end here

  let serialNumber = 1;
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  // set array
  const [array, setArray] = useState([]);
  // set filtered question
  const [filteredQuestion, setFilteredQuestion] = useState([]);
  // final filtered question
  const [finalQuestion, setFinalQuestion] = useState([]);

  useEffect(() => {
    if (userLocalStorageData?.status !== "Student") {
      navigate("/student_login");
    }
  }, []);

  // getting users answers
  useEffect(() => {
    fetch(
      domain + `/get_single_user_answer_list?roll=${userLocalStorageData?.roll}`
    )
      .then((res) => res.json())
      .then((result) => setAnswers(result));
  }, []);

  useEffect(() => {
    answers?.map((data) => setArray((ls) => [...ls, data?.questionID]));
  }, [answers]);

  let arrayConvertString = array;
  // console.log(arrayConvertString)

  useEffect(() => {
    fetch(
      domain +
        `/search?group=${userLocalStorageData?.groupName}&a=${arrayConvertString}`
    )
      .then((res) => res.json())
      .then((result) => setFilteredQuestion(result));
  }, [arrayConvertString]);

  useEffect(() => {
    filteredQuestion?.map((data) =>
      data.groupName === userLocalStorageData?.groupName
        ? setFinalQuestion((dl) => [...dl, data])
        : undefined
    );
  }, [filteredQuestion]);

  // getting value by Group
  fetch(
    domain +
      `/get_group_question_name?groupName=${userLocalStorageData?.groupName}`
  )
    .then((res) => res.json())
    .then((result) => setQuestion(result.questions));
  // console.log(question)

  const notAgree = () => {
    secureLocalStorage.clear("userInfo");
    navigate("/student_login");
  };

  const agreeCondition = () => {
    const answerData = {
      question: "Terms and conditions",
      ans: "I agree all the terms and conditions.",
      groupName: question?.groupName,
      answer_by_roll: userLocalStorageData?.roll,
      answer_by_name: userLocalStorageData?.name,
    };
    fetch(domain + `/answer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answerData),
    })
      .then((res) => res.json())
      .then((result) => navigate("/student_login"));
  };

  const count = parseInt((answers?.length * 100) / question?.length);

  return (
    <div className="bg-white dark:bg-black duration-500">
      {agree >= 1 ? undefined : (
        <div className="trams bg-gray-50 h-screen w-screen flex justify-center items-center fixed z-[60]">
          <div className="modal w-[20rem] border border-gray-300 h-max bg-white rounded-lg">
            <div className="icon w-full flex justify-center items-center mt-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 text-blue-600 border rounded-full p-2 bg-blue-100 border-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="w-14 h-14 text-blue-600 border rounded-full p-2 bg-blue-100 border-blue-600 ml-[-.5rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                />
              </svg>
            </div>
            <p className="text-xl font-[500] font-nr mt-4">
              Terms and conditions
            </p>
            <p className="text-sm font-[500] font-nr mt-4 text-gray-400 px-8">
              Do you agree our terms and conditions. If you agree click on yes.
              Then you will able to proceed. If you don't want to agree the
              terms and conditions please leave the page.
            </p>
            <Link
              to={"/trams"}
              className="text-sm font-[500] font-nr pt-4 text-blue-600 px-8 text-left cursor-pointer"
            >
              Read the terms and conditions
            </Link>
            <div className="button-group gap-2 p-4 flex mt-10">
              <button
                onClick={agreeCondition}
                className="w-[50%] bg-blue-600 text-white font-nr font-[500] rounded-sm py-2"
              >
                Yes
              </button>
              <button
                onClick={notAgree}
                className="w-[50%] bg-red-600 text-white font-nr font-[500] rounded-sm py-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
      <Header></Header>

      {/* search the student my class roll */}
      <div className="main-wrapper px-4 py-10 lg:py-20 lg:px-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
        <div className="group-details ">
          <div className="upper-part block justify-between items-center sm:flex">
            <div className="left-part">
              <h1 className="text-xl font-nr text-left font-[500] sm:text-2xl dark:text-white">
                Member of group :{" "}
                <span className="text-violet-500 dark:text-[#ebff00]">
                  {userLocalStorageData?.groupName}
                </span>
              </h1>
              <h1 className="text-xl font-nr text-left font-[500] sm:text-2xl dark:text-white">
                Welcome back :{" "}
                <span className="text-violet-500 dark:text-[#ebff00]">
                  {userLocalStorageData?.name}
                </span>
              </h1>
            </div>

            <div className="right-part mt-6 sm:mt-0">
              <h4 className="bg-violet-600 px-5 py-2 rounded-full font-nr text-xl font-[550] max-w-max text-white dark:bg-[#ebff00] dark:text-black">
                {/* {(answers?.length * 100) / question?.length} % */}
                {count >= 100 ? "100%" : count + "%"}
              </h4>
            </div>
          </div>

          <div className="all-questions mt-16">
            <h3 className="text-left font-nr font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:border-[#ebff00] dark:text-[#ebff00]">
              All questions assign by group leader
            </h3>

            {finalQuestion ? (
              <>
                {" "}
                {finalQuestion?.map((data) => (
                  <>
                    <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
                      <Link
                        to={`/ans/${data.id}`}
                        className="question-main font-nr text-xl text-left font-[500] flex justify-between items-center gap-3"
                      >
                        <div className="flex gap-3">
                          <p>{serialNumber++ + "."}</p>
                          <h2 className="text-left">{data?.question}</h2>
                        </div>
                        <Link to={`/ans/${data.id}`} className="delete-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </Link>
                      </Link>
                    </div>
                  </>
                ))}
              </>
            ) : (
              <>
                {" "}
                {/* skeleton loader start from here  */}
                <div
                  role="status"
                  class="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                  <div class="flex items-center justify-between">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <div class="flex items-center justify-between pt-4">
                    <div>
                      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
                {/* skeleton loader start from here  */}
              </>
            )}
          </div>
          <div className="all-questions mt-16">
            <h3 className="text-left font-nr font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:border-[#ebff00] dark:text-[#ebff00]">
              Your answer list
            </h3>
            {answers?.map((data) => (
              <>
                <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
                  <Link
                    to={`/view/${data.id}`}
                    className="question-main font-nr text-xl text-left font-[500] flex justify-between items-center gap-3"
                  >
                    <h2>{data?.question}</h2>
                    <div className="button-group flex gap-3">
                      <Link to={`/view/${data.id}`} className="delete-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </Link>

                      <Link
                        to={`/updateANS/${data.id}`}
                        className="delete-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                          />
                        </svg>
                      </Link>
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
