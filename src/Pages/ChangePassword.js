import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import domain from "../hooks/domain";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [Status, setStatus] = useState(false);
  const [timer, setTimer] = useState();
  useEffect(() => {
    const s = sessionStorage.getItem("status");
    if (s === !true || !s) {
      navigate("/forgetRoll");
    }
  }, []);

  const otpCheck = (e) => {
    e.preventDefault();
    const from = e.target;
    const password = from.Password.value;
    const rPassword = from.rPassword.value;
    // console.log(password, rPassword);

    const newPassword = {
      email: sessionStorage.getItem("email"),
      password: password,
    };

    if (password !== rPassword) {
      toast.error("Password and confirm password does not match");
    } else {
      fetch(domain + `/update_password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPassword),
      })
        .then((res) => res.json())
        .then((result) => {
          setStatus(true);
          // console.warn(result);
          from.reset();
          var timeleft = 5;
          setInterval(function () {
            setTimer(timeleft);
            if (timeleft === 0) {
              navigate("/student_login");
              sessionStorage.clear();
            }
            timeleft -= 1;
          }, 1000);
        });
    }
  };

  return (
    <div className="main bg-white duration-500 dark:bg-black">
      <div className="absolute flex justify-center items-center w-full h-screen flex-col">
        {Status && (
          <p className="text-lg font-nr mb-2 text-orange-400 font-[500]">
            **Your password has been updated. Redirecting you to login in{" "}
            {timer} seconds.
          </p>
        )}
        <h1 className="text-[25px] font-nr font-[600] text-left mb-10 dark:text-white flex">
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
        <div className="upper-text w-[18rem] font-nr font-[500] text-xl mb-3">
          <h4 className="text-left text-black dark:text-white">
            Enter new password
          </h4>
        </div>
        <form
          onSubmit={otpCheck}
          action=""
          className="flex flex-col w-[18rem] items-start"
        >
          <input
            type="password"
            id="password"
            name="Password"
            className="font-nr mb-2 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
            placeholder="Enter password"
            required
          />
          <input
            type="password"
            id="password"
            name="rPassword"
            className="font-nr border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
            placeholder="Confirm password"
            required
          />
          <button
            type="submit"
            className="font-nb mt-4 w-[6rem] flex justify-center items-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:text-black dark:border-[#ebff00] dark:hover:bg-transparent dark:duration-500 dark:hover:text-[#ebff00]"
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
      </div>
    </div>
  );
};

export default ChangePassword;
