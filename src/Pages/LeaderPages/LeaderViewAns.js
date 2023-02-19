import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import domain from "../../hooks/domain";

import "../../Css/Main.css";

const LeaderViewAns = () => {
  const [question, setQuestion] = useState();
  const ID = useParams();
  fetch(domain + `/get_single_answer?id=${ID.id}`)
    .then((res) => res.json())
    .then((result) => setQuestion(result[0]));
  //   console.log(question);
  return (
    <div>
      <Header></Header>
      <div className="answer-body text-left font-general font-[500] px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20">
        <h1 className="text-2xl mb-4 dark:text-white">main question</h1>
        <p
          className="main_post text-sm dark:text-white"
          dangerouslySetInnerHTML={{ __html: question?.ans }}
        ></p>
      </div>
    </div>
  );
};

export default LeaderViewAns;
