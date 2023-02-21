import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import domain from "../hooks/domain";
import secureLocalStorage from "react-secure-storage";

const StudentLogin = () => {
  // navigate to routs
  const navigate = useNavigate();
  const userLocalStorageData = JSON.parse(
    secureLocalStorage.getItem("userInfo")
  );
  useEffect(() => {
    if (userLocalStorageData?.status === "Leader") {
      console.warn(userLocalStorageData?.status);
      navigate("/leader");
    }
  }, []);
  useEffect(() => {
    if (userLocalStorageData?.status === "Student") {
      console.warn(userLocalStorageData?.status);
      navigate("/student");
    }
  }, []);

  const loginFormSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const roll = from.roll.value;
    const password = from.password.value;

    fetch(domain + `/student_login?roll=${roll}&password=${password}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.length === 0) {
          toast.error("Roll or Password is incorrect");
        } else {
          toast.success("Login successful");
          secureLocalStorage.setItem(
            "userInfo",
            JSON.stringify(result.userData[0])
          );
          secureLocalStorage.removeItem("adminInfo");
          const userLocalStorageData = JSON.parse(
            secureLocalStorage.getItem("userInfo")
          );
          // console.log(userLocalStorageData);
          if (userLocalStorageData.status === "Leader") {
            navigate("/leader");
          } else if (userLocalStorageData.status === "Student") {
            navigate("/student");
          } else {
            navigate("/404");
          }
        }
      });
  };

  // forget password start from here

  return (
    <div className="bg-white duration-500 dark:bg-black">
      <div className="register-wrapper-main block lg:flex">
        <div className="left-side w-full lg:w-[50%]">
          <div className="have-account border-b py-4 font-general font-[500] flex justify-center cursor-pointer bg-gray-50 sticky top-0 dark:bg-black dark:text-white">
            <h3 className="flex">
              Don't have an account
              <Link
                to={"/register"}
                className="ml-2 flex gap-1 text-violet-600 rounded-full bg-violet-100 px-2 duration-500 hover:bg-violet-200 dark:bg-[#ebff00] dark:text-black"
              >
                {" "}
                register
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
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>{" "}
            </h3>
          </div>
          <div className="login-main w-full flex flex-col justify-center items-center h-screen xl:h-screen font-general mt-[-3rem]">
            <h1 className="text-[25px] font-general font-[600] text-left mb-10 dark:text-white">
              Open Source <sup className="font-[550]">beta</sup>
            </h1>
            <form onSubmit={loginFormSubmit} className="w-[18rem] text-left">
              <div className="mb-6">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Class roll
                </label>
                <input
                  type="number"
                  id="email"
                  name="roll"
                  className="text-black font-[500] border border-gray-300 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
                  placeholder="test subject 24"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5 dark:bg-black dark:border-[#ebff00] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ebff00] dark:focus:border-[#ebff00]"
                  placeholder="•••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center text-white border border-violet-600 bg-violet-600 rounded-sm py-2 font-[550] duration-300 hover:border-violet-600 hover:bg-transparent hover:text-violet-600 dark:bg-[#ebff00] dark:text-black dark:border-[#ebff00] dark:hover:bg-transparent dark:duration-500 dark:hover:text-[#ebff00]"
              >
                Login
              </button>
            </form>
            <Link
              to={"/forgetRoll"}
              className="font-general text-left w-[18rem] font-[500] mt-3 dark:text-white"
            >
              Forget password
            </Link>
          </div>
        </div>
        <div className=" right-side w-[50%] bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/cf515c158457611.638c253d1adb8.jpg')] bg-cover bg-no-repeat bg-center hidden sm:block "></div>
      </div>
    </div>
  );
};

export default StudentLogin;
