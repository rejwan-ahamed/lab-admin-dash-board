import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Main.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [defaults, setDefault] = useState("light");

  useEffect(() => {
    let themeStatus = localStorage.getItem("status");
    setDefault(themeStatus);
  });

  // set theme
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (defaults === "dark") {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "white";
    }
  }, [defaults]);

  const handelTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("status", theme);
  };

  const buttonControl = () => {
    setOpen(!open);
  };
  console.log(theme);
  // console.log(open);
  return (
    <>
      {/* desktop nav */}
      <div className="header-holder border-b hidden sm:block">
        <Navbar
          fluid={true}
          rounded={true}
          className=" xl:px-40 font-general max-w-[1560px] mx-auto rounded-none duration-500 bg-white dark:bg-transparent dark:text-white"
        >
          <Navbar.Brand to="/navbars">
            <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-[#ebff00] dark:duration-500">
              Open Source <sup className="">beta</sup>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="flex flex-row max-h-max items-center">
            <Link to={"/"} active={true} className="cursor-pointer">
              Dashboard
            </Link>
            <Link to={"/leader"} className="cursor-pointer">
              Leader
            </Link>
            <Link to={"/login"} className="cursor-pointer">
              Admin login
            </Link>
            <Link to={"/register"} className="cursor-pointer">
              Register
            </Link>
            <Link to={"/student_login"} className="cursor-pointer">
              Student login
            </Link>
            <Link to={"/add_question"} className="cursor-pointer">
              Add question
            </Link>
            <Link to={"/student"} className="cursor-pointer">
              Home
            </Link>
            <Link to={"/more"} className="cursor-pointer">
              Know more
            </Link>
            {/* dark mode toggle */}
            <div className="darkMode-button-group cursor-pointer">
              <div
                onClick={() => handelTheme()}
                className="dark-mode bg-violet-50 p-2 rounded-full border border-violet-500 dark:border-[#ebff00] dark:text-black dark:bg-[#ebff00]"
              >
                {theme === "dark" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                  </svg>
                )}
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {/* mobile nav */}
      <div className="mobile-nav-main block sm:hidden">
        <div className="mobile-nav font-general border-b px-4 flex justify-between items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Open Source <sup className="">beta</sup>
          </span>
          <div
            onClick={() => buttonControl()}
            className="nav-icon border-l py-3 pl-3 dark:text-white"
          >
            {open ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        {/* mobile nav main part */}
        {open ? (
          <div
            onClick={() => setOpen(!open)}
            className="z-[100] duration-500 sticky main-mobile-nav-section bg-gray-50 h-screen w-full flex flex-col gap-3  font-general font-[500] text-2xl text-left pt-10 dark:bg-black dark:text-white"
          >
            <Link to={"/leader"} className="border-b pb-3 px-4">
              Leader
            </Link>
            <Link to={"/login"} className="border-b pb-3 px-4">
              Admin login
            </Link>
            <Link to={"/register"} className="border-b pb-3 px-4">
              Register
            </Link>
            <Link to={"/student_login"} className="border-b pb-3 px-4">
              Student login
            </Link>
            <Link to={"/add_question"} className="border-b pb-3 px-4">
              Add Question
            </Link>
            <Link to={"/student"} className="border-b pb-3 px-4">
              Home
            </Link>
            <Link to={"/more"} className="border-b pb-3 px-4">
              More
            </Link>
            <div className="bottom-section-group absolute bottom-44 flex justify-between items-center w-full pr-4">
              <Link className=" text-white pt-2 px-6 py-1 pb-2 bg-red-600 max-w-max rounded-full ml-4 leading-none text-[18px] duration-300 border border-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600 dark:border-[#EBFF00] dark:bg-[#eaff006d] dark:text-[#EBFF00]">
                Logout
              </Link>

              <div className="button-toggle-group dark:text-black">
                {theme === "dark" ? (
                  <button
                    onClick={() => handelTheme()}
                    className="bg-violet-100 p-3 rounded-full ml-4 border border-violet-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => handelTheme()}
                    className="bg-[#EBFF00] p-3 rounded-full ml-4 border border-[#EBFF00]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default Header;
