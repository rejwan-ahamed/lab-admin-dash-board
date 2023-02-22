import React, { useRef } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import domain from "../hooks/domain";

const ForgetPasswordRoll = () => {
  const navigate = useNavigate();
  const forgetPass = (e) => {
    e.preventDefault();
    const form = e.target;
    const recoveryRoll = form.roll.value;
    fetch(domain + `/otp_data?roll=${recoveryRoll}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.length === 0) {
          toast.error("No account found");
        } else {
          const userEmail = result[0].email;
          console.log(userEmail);
          sessionStorage.setItem("email", userEmail);
          sessionStorage.setItem("roll", recoveryRoll);

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
          test();

          navigate("/forgetEmail");
        }
      });

    // navigate("/forgetEmail");
  };
  return (
    <div className="main bg-white duration-500 dark:bg-black">
      <div className="absolute flex justify-center items-center w-full h-screen flex-col">
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
            Please enter your roll below
          </h4>
        </div>
        <form
          onSubmit={forgetPass}
          action=""
          className="flex flex-col w-[18rem] items-start"
        >
          <input
            type="number"
            id="password"
            name="roll"
            className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
            placeholder="Enter your roll"
            required
          />
          <button
            type="submit"
            className="mt-4 w-[6rem] flex justify-center items-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:text-black dark:border-[#ebff00] dark:hover:bg-transparent dark:duration-500 dark:hover:text-[#ebff00]"
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

export default ForgetPasswordRoll;
