import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import domain from "../hooks/domain";

const EmailSend = () => {
  const navigate = useNavigate();
  const [defaultEmail, setDefaultEmail] = useState();
  useEffect(() => {
    const s = sessionStorage.getItem("email");
    if (s === null) {
      navigate("/forgetRoll");
    }
  }, []);

  useEffect(() => {
    const s = sessionStorage.getItem("email");
    setDefaultEmail(s);
  }, []);

  useEffect(() => {
    const test = () => {
      const random = Math.floor(Math.random() * 1000000 + 1);
      console.log(random);

      const OTPdata = {
        otp: random,
        email: sessionStorage.getItem("email"),
      };
      console.log(OTPdata);
      fetch(domain + `/update_otp`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(OTPdata),
      })
        .then((res) => res.json())
        .then((result) => {
          console.warn(result);
        });
    };
    setTimeout(test, 10);
  }, []);

  return (
    <div className="main bg-white duration-500 dark:bg-black">
      <div className="absolute flex justify-center items-center w-full h-screen flex-col">
        <p className="text-lg font-general mb-2 text-orange-400 font-[500]">
          **We send an OTP in this {defaultEmail} account. Please check your
          email.
        </p>
        <h1 className="text-[25px] font-general font-[600] text-left mb-10 dark:text-white flex">
          Open Source{" "}
          <sub className="font-[550]">
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
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </sub>
        </h1>
        <div className="upper-text w-[18rem] font-general font-[500] text-xl mb-3">
          <h4 className="text-left text-black dark:text-white">
            Please enter your OTP
          </h4>
        </div>
        <form action="" className="flex flex-col w-[18rem] items-start">
          <input
            type="number"
            id="password"
            name="roll"
            className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
            placeholder="Enter your OTP"
            required
          />
          <button
            type="submit"
            className="mt-4 ml-[7.5rem] w-[6rem] flex justify-center items-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:text-black dark:border-[#ebff00] dark:hover:bg-transparent dark:duration-500 dark:hover:text-[#ebff00]"
          >
            Next{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </form>
        <Link
          to={"/forgetRoll"}
          type="submit"
          className="ml-[-11rem] mt-[-2.6rem] w-max px-3 flex justify-center items-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:text-black dark:border-[#ebff00] dark:hover:bg-transparent dark:duration-500 dark:hover:text-[#ebff00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          Previous{" "}
        </Link>
      </div>
    </div>
  );
};

export default EmailSend;
