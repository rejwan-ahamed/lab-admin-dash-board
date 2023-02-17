import React, { Fragment, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import Header from "../Components/Header";
import "react-quill/dist/quill.snow.css";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

const AnswerQuestion = () => {
  // for dialog control
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // end here
  useEffect(() => {
    fetch("https://api.haithemfurniture.com/single_post/103")
      .then((res) => res.json())
      .then((result) => setValue(result[0]?.postBody));
  }, []);
  const [value, setValue] = useState("");

  return (
    <div className="duration-500">
      {/* modal start here  */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[23rem] transform overflow-hidden rounded-sm bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full px-6 pt-6  ">
                    <Dialog.Title
                      as="h3"
                      className=" text-lg font-medium leading-6 text-white bg-red-600 p-5 max-w-max rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.2}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
                        />
                      </svg>
                    </Dialog.Title>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className=" px-6 leading-6 text-red-600 font-general font-[550] text-xl mt-4 mb-3"
                  >
                    Warning
                  </Dialog.Title>
                  <div className="mt-2 px-6 ">
                    <p className="text-lg text-black font-general font-[500] ">
                      Do you want to discard. click on yes to discard or cancel
                      to go back.
                    </p>
                  </div>

                  <div className="mt-4 flex w-full">
                    <Link
                    to={'/student'}
                      type="button"
                      className="w-[50%] font-general font-[500] text-lg border-t border-r  border-black inline-flex justify-center bg-red-600 px-4 py-3 text-white duration-500 hover:bg-red-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Yes
                    </Link>
                    <button
                      type="button"
                      className="w-[50%] font-general font-[500] text-lg border-t border-b-0  border-black inline-flex justify-center bg-blue-600 px-4 py-3 text-white duration-500 hover:bg-blue-400 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* modal end here  */}
      <Header></Header>

      <div className="answer-question px-4 py-10 lg:px-20 lg:py-20 xl:px-40 xl:py-20">
        <h1 className="font-general text-xl font-[500] text-left mb-6 dark:text-white">
          Name of the question
        </h1>
        <ReactQuill
          theme="snow"
          value={value}
          modules={AnswerQuestion.modules}
          onChange={setValue}
          className="dark:text-white"
        ></ReactQuill>
        <div className="button-group flex gap-2 justify-start w-full mt-6">
          <button className="bg-violet-200 px-6 py-2 text-violet-600 border-violet-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-violet-600 hover:border-violet-500 dark:border-[#ebff00] dark:bg-[#eaff0069] dark:text-[#ebff00] dark:hover:bg-transparent">
            Submit Answer
          </button>
          <button
            onClick={openModal}
            className="bg-red-200 px-6 py-2 border-red-600 text-red-600 border rounded-sm font-general font-[550] duration-500 hover:bg-transparent hover:text-red-600 hover:border-red-600 dark:bg-[#ff00003d] dark:hover:bg-transparent"
          >
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
