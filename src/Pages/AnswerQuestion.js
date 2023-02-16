import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "../Components/Header";
import "react-quill/dist/quill.snow.css";

const AnswerQuestion = () => {
  useEffect(() => {
    fetch("https://api.haithemfurniture.com/single_post/103")
      .then((res) => res.json())
      .then((result) => setValue(result[0]?.postBody));
  }, []);
  const [value, setValue] = useState("");

  return (
    <div className="duration-500">
      <Header></Header>

      <div className="answer-question px-40 py-20">
        <h1 className="font-general text-xl font-[500] text-left mb-6 dark:text-white">
          Name of the question
        </h1>
        <ReactQuill
          theme="snow"
          value={value}
          modules={AnswerQuestion.modules}
          onChange={setValue}
        ></ReactQuill>
        <div className="button-group flex gap-2 justify-start w-full mt-6">
          <button className="bg-violet-200 px-6 py-2 text-violet-600 border-violet-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-violet-600 hover:border-violet-500 dark:border-[#ebff00] dark:bg-[#eaff0069] dark:text-[#ebff00] dark:hover:bg-transparent">
            Submit Answer
          </button>
          <button className="bg-red-200 px-6 py-2 border-red-600 text-red-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-red-600 hover:border-red-600 dark:bg-[#ff00003d] dark:hover:bg-transparent">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerQuestion;

AnswerQuestion.modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["code-block", "link"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"],
  ],
};
