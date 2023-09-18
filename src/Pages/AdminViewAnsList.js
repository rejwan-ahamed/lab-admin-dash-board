import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import Header from "../Components/Header";
import domain from "../hooks/domain";

const AdminViewAnsList = () => {
  const ID = useParams();

  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );

  // getting users answers
  useEffect(() => {
    fetch(domain + `/get_single_user_answer_list?roll=${ID?.id}`)
      .then((res) => res.json())
      .then((result) => {
        setAnswers(result);
      });
  }, []);

  // console.log(answers)
  const [userData, setUserData] = useState();
  useEffect(() => {
    fetch(domain + `/single_student_data?roll=${ID?.id}`)
      .then((res) => res.json())
      .then((result) => setUserData(result[0]));
  }, []);

  // getting value by Group
  fetch(domain + `/get_group_question_name?groupName=${userData?.groupName}`)
    .then((res) => res.json())
    .then((result) => setQuestion(result.questions));
  // console.log(question)

  const count = parseInt((answers?.length * 100) / question?.length);

  const [ans, setAns] = useState();

  // this part of the code will filter the ans and remove the trams and condition part
  useEffect(() => {
    fetch(domain + `/single_user_ans_list?roll=${ID.id}`)
      .then((res) => res.json())
      .then((result) =>
        setAns(
          result?.filter(
            (datas) => datas.question !== "Terms and conditions"
          )
        )
      );
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="main-part px-4 py-10 lg:py-20 lg:px-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
        <div className="wrapper-top flex justify-between items-center">
          <h2 className="font-[500] font-general text-left text-2xl dark:text-white">
            All question answer by :{" "}
            <span className="text-violet-600 dark:text-[#EBFF00]">
              {userData?.name}
            </span>
          </h2>
          <div className="right-part mt-6 sm:mt-0">
            <h4 className="bg-violet-600 px-5 py-2 rounded-full font-general text-xl font-[550] max-w-max text-white dark:bg-[#ebff00] dark:text-black">
              {/* {(answers?.length * 100) / question?.length} % */}
              {count > 100 ? "100%" : count + "%"}
            </h4>
          </div>
        </div>
        <div className="all-ans-list mt-10 text-left font-general font-[500]">
          {ans?.map((data) => (
            <div className="ans-list-body border-b py-4 dark:text-white dark:border-[#EBFF00]">
              <h2 className="text-2xl">{data.question}</h2>
              <Link
                to={`/adminViewANS/${data?.id}`}
                className="flex gap-1 items-center text-lg mt-2"
              >
                view ans{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminViewAnsList;
