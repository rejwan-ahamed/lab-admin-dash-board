import React from "react";
import Header from "../Components/Header";

const AddQuestion = () => {
  return (
    <div>
      <Header></Header>
      <div className="add-question-ma px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20 max-w-[1560px] mx-auto">
        <h1 className="text-2xl font-general font-[500] text-left dark:text-white">
          Add question for group <samp className="text-violet-600 dark:text-[#ebff00]">A</samp>
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
            class="block p-2.5 w-full text-sm text-black rounded-sm border border-black focus:ring-violet-500 focus:border-violet-500 dark:bg-black dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
            placeholder="Write your thoughts here..."
          ></textarea>
          <div className="button-group flex gap-2 justify-start w-full mt-6">
            <button className="bg-violet-200 px-6 py-2 text-violet-600 border-violet-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-violet-600 hover:border-violet-500 dark:border-[#ebff00] dark:bg-[#eaff0069] dark:text-[#ebff00] dark:hover:bg-transparent">
              Submit Question
            </button>
            <button className="bg-red-200 px-6 py-2 border-red-600 text-red-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-red-600 hover:border-red-600 dark:bg-[#ff00003d] dark:hover:bg-transparent">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
