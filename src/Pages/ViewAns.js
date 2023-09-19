import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import domain from "../hooks/domain";

import "../Css/Main.css";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

const ViewAns = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (userLocalStorageData?.status !== "Student") {
      navigate("/student_login");
    }
  }, []);

  const ID = useParams();
  const [comments, setComments] = useState();

  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );

  const {
    data: categorys,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(domain + `/single_ans_comments?id=${ID.id}`)
        .then((res) => res.json())
        .then((result) => setComments(result)),
  });

  const addQuestion = (e) => {
    e.preventDefault();
    const from = e.target;
    const question = from.question.value;
    // console.log(question);

    const commentData = {
      Comment: question,
      ansID: ID.id,
      commentBY: userLocalStorageData.name,
    };

    if (question === "") {
      toast.error("No question added");
    } else {
      fetch(domain + `/comment_ans?id=${ID?.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
        .then((res) => res.json())
        .then((result) => {
          // toast.success("your post has been added");
          // console.warn(result);
          from.reset();
          refetch();
        });
    }
  };

  const [question, setQuestion] = useState();
  fetch(domain + `/get_single_answer?id=${ID.id}`)
    .then((res) => res.json())
    .then((result) => setQuestion(result[0]));
  //   console.log(question);
  return (
    <div>
      <Header></Header>
      <div className="answer-body text-left font-nr font-[500] px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20">
        <h1 className="text-2xl mb-4 dark:text-white">{question?.question}</h1>
        <p
          className="main_post text-sm dark:text-white"
          dangerouslySetInnerHTML={{ __html: question?.ans }}
        ></p>
      </div>
      {/* comments part start here */}
      <div className="comments-mai px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20 ">
        <p className="font-nr font-[500] text-xl text-left dark:text-white">
          Comments :
        </p>

        <div className="main-comments dark:text-white text-left font-[500] text-lg font-nr mt-10">
          {comments?.map((data) => (
            <div className="comment_holder border-b py-2">
              <p className="text-gray-400 mt-2">{data?.commentBY}</p>
              <p className="mt-1">{data?.Comment}</p>
            </div>
          ))}
        </div>

        <div className="add-comment-area text-left mt-10 pb-10">
          <form onSubmit={addQuestion}>
            <textarea
              id="message"
              name="question"
              rows="4"
              class="block p-2.5 w-full text-sm text-black rounded-sm border border-black focus:ring-violet-500 focus:border-violet-500 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className="button-group w-full mt-6">
              <button className="bg-violet-200 px-6 py-2 text-violet-600 border-violet-600 border rounded-sm font-nr font-[550] duration-500 hover:bg-transparent hover:text-violet-600 hover:border-violet-500 dark:border-[#ebff00] dark:bg-[#eaff0069] dark:text-[#ebff00] dark:hover:bg-transparent">
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewAns;
