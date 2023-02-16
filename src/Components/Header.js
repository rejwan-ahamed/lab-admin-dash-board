import { Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const buttonControl = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <>
      {/* desktop nav */}
      <div className="header-holder border-b hidden sm:block">
        <Navbar
          fluid={true}
          rounded={true}
          className=" xl:px-40 font-general max-w-[1560px] mx-auto"
        >
          <Navbar.Brand to="/navbars">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Open Source <sup className="">beta</sup>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
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
            className="nav-icon border-l py-3 pl-3"
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
          <div onClick={()=>setOpen(!open)} className="z-[100] duration-500 fixed main-mobile-nav-section bg-gray-50 h-screen w-full flex flex-col gap-3  font-general font-[500] text-2xl text-left pt-10">
            <Link to={"/"} className="border-b pb-3 px-4">
              Home
            </Link>
            <Link to={"/"} className="border-b pb-3 px-4">
              Dashboard
            </Link>
            <Link to={"/"} className="border-b pb-3 px-4">
              Login
            </Link>
            <Link to={"/"} className="border-b pb-3 px-4">
              Student login
            </Link>
            <Link to={"/"} className="border-b pb-3 px-4">
              Register
            </Link>
            <Link to={"/"} className="border-b pb-3 px-4">
              Home
            </Link>
            <Link className="absolute bottom-[10%] text-white pt-2 px-6 py-1 pb-2 bg-red-600 max-w-max rounded-full ml-4 leading-none text-[18px] duration-300 border border-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600">
              Logout
            </Link>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default Header;
