import { Navbar } from "flowbite-react";
import React from "react";

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
            Open Source
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true} className="cursor-pointer">
            Home
          </Navbar.Link>
          <Navbar.Link to="/navbars" className="cursor-pointer">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="cursor-pointer">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="cursor-pointer">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="cursor-pointer">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
