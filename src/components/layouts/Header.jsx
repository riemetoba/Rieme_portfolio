import { Link } from "react-router-dom";

import Container from "../Container";

import Flex from "../Flex";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState (false);
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="bg-white py-4 fixed z-10 w-full">
      <Container>
        <Flex className={"justify-between"}>
          <Link to={"/"}>
            <div className="">
              <h2 className="font-inter font-medium text-2xl">RIEME</h2>
            </div>
          </Link>
          {!isOpen && (
            <div onClick={toggleMenu} className="cursor-pointer text-2xl font-bold md:hidden">
              <CiMenuBurger/>
            </div>
          )}
          {isOpen && (
            <div onClick={toggleMenu} className="cursor-pointer text-2xl font-bold md:hidden">
              <IoMdClose/>
            </div>
          )}
          {isOpen ? (
<div className=""></div>
          ) : (
<div className=""></div>
          )}
          <div className="">
            <ul className="md:flex items-center md:justify-between md:gap-x-7 hidden">
              <Link to={"/"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  Home
                </li>
              </Link>

              <Link to={"/aboutus"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  About Me
                </li>
              </Link>

              <Link to={"/"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  services
                </li>
              </Link>

              <Link to={"/"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  Portfolio
                </li>
              </Link>

              <Link to={"/"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  Blog
                </li>
              </Link>

              <Link to={"/"}>
                <li className="font-inter text-sm hover:text-org duration-300 uppercase">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Header;
