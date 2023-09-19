import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Components/Header";
import domain from "../hooks/domain";

import "../Css/Main.css";
import { useQuery } from "react-query";
import { toast } from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

const AdminViewAns = () => {
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("adminInfo")
  );
  const navigate = useNavigate()
  useEffect(() => {
    if (userLocalStorageData?.status !== "Admin") {
      navigate("/login");
    }
  }, []);

  const ID = useParams();
  const [comments, setComments] = useState();

 

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
  
    </div>
  );
};

export default AdminViewAns;
