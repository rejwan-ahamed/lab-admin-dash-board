import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="border-b xl:px-40 font-general"
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
    </>
  );
};

export default Header;
