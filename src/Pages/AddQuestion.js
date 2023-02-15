import React from "react";
import Header from "../Components/Header";

const AddQuestion = () => {
  return (
    <div>
      <Header></Header>
      <div className="add-question-ma px-40 py-20">
        <h1 className="text-2xl font-general font-[500] text-left">
          Add question for group <samp className="text-violet-600">A</samp>
        </h1>

        <div className="add-question text-left font-general font-[500] mt-10">
          <label
            for="message"
            class="text-[18px] block mb-3 font-medium text-gray-900 dark:text-white"
          >
            Add your practice question
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-black rounded-sm border border-black focus:ring-violet-500 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-500 dark:focus:border-violet-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
