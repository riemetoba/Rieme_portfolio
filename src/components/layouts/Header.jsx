import { Link } from "react-router-dom";

import Container from "../Container";

import Flex from "../Flex";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/aboutme" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <nav className="bg-white py-2 md:py-4 fixed w-screen md:w-full z-10 shadow">
      <Container>
        <Flex className="justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <h2 className="font-inter font-medium text-2xl px-2">RIEME</h2>
          </Link>
          {/* Logo */}
          {/* Desktop menu */}
          <ul className="hidden sm:flex items-center gap-x-7">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="font-inter text-sm hover:text-org duration-300 uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop menu */}

          {/* Mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-2xl px-2"
          >
            {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </button>
          {/* Mobile button */}
        </Flex>

        {/* For mobile */}
        <div
          className={`sm:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-y-4 py-4 bg-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="font-inter text-sm hover:text-org duration-300 uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* For mobile */}
      </Container>
    </nav>
  );
};

export default Header;
