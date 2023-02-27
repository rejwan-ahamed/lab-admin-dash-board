import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "../Components/Header";
import domain from "../hooks/domain";

const StudentDashboard = () => {
  let serialNumber = 1;
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  // set array
  const [array, setArray] = useState([]);
  // set filtered question
  const [filteredQuestion, setFilteredQuestion] = useState([]);
  // final filtered question
  const [finalQuestion, setFinalQuestion] = useState([]);
  const navigate = useNavigate();
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );

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
    fetch(domain + `/search?group=A&a=${arrayConvertString}`)
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

  const count = parseInt((answers?.length * 100) / question?.length);

  return (
    <div className="bg-white dark:bg-black duration-500">
      <Header></Header>
      {/* search the student my class roll */}
      <div className="main-wrapper px-4 py-10 lg:py-20 lg:px-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
        <div className="group-details ">
          <div className="upper-part block justify-between items-center sm:flex">
            <div className="left-part">
              <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
                Member of group :{" "}
                <span className="text-violet-500 dark:text-[#ebff00]">
                  {userLocalStorageData?.groupName}
                </span>
              </h1>
              <h1 className="text-xl font-general text-left font-[500] sm:text-2xl dark:text-white">
                Welcome back :{" "}
                <span className="text-violet-500 dark:text-[#ebff00]">
                  {userLocalStorageData?.name}
                </span>
              </h1>
            </div>

            <div className="right-part mt-6 sm:mt-0">
              <h4 className="bg-violet-600 px-5 py-2 rounded-full font-general text-xl font-[550] max-w-max text-white dark:bg-[#ebff00] dark:text-black">
                {/* {(answers?.length * 100) / question?.length} % */}
                {count >= 100 ? "100%" : count + "%"}
              </h4>
            </div>
          </div>

          <div className="all-questions mt-16">
            <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:border-[#ebff00] dark:text-[#ebff00]">
              All questions assign by group leader
            </h3>

            {finalQuestion?.map((data) => (
              <>
                <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
                  <Link
                    to={`/ans/${data.id}`}
                    className="question-main font-general text-xl text-left font-[500] flex justify-between items-center gap-3"
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
          </div>
          <div className="all-questions mt-16">
            <h3 className="text-left font-general font-[500] text-violet-600 mb-4 border border-violet-600 rounded-full py-1 px-4 max-w-max dark:border-[#ebff00] dark:text-[#ebff00]">
              Your answer list
            </h3>
            {answers?.map((data) => (
              <>
                <div className="question body border-b py-3 px-3  cursor-pointer duration-300 hover:text-violet-600 dark:hover:text-[#ebff00] dark:text-white ">
                  <Link
                    to={`/view/${data.id}`}
                    className="question-main font-general text-xl text-left font-[500] flex justify-between items-center gap-3"
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
