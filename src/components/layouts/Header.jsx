// 
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to close menu when a link is clicked
  const handleMenuClick = () => {
    setShowMenu(false);
  };

  // Nav Links Data (Cleaner way to manage links)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/aboutus" },
    { name: "Services", path: "/" },
    { name: "Portfolio", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contact", path: "/" },
  ];

  return (
    <div className="bg-white py-4 fixed z-50 w-full shadow-sm">
      <Container>
        <Flex className="justify-between items-center relative">
          {/* Logo */}
          <Link to={"/"} onClick={handleMenuClick}>
            <div className="">
              <h2 className="font-inter font-medium text-2xl">RIEME</h2>
            </div>
          </Link>

          {/* Desktop Menu (Hidden on Mobile/Tablet, Visible on lg) */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-x-7">
              {navLinks.map((link, index) => (
                <li key={index} className="font-inter text-sm hover:text-org duration-300 uppercase">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button (Visible on Mobile/Tablet, Hidden on lg) */}
          <div
            className="lg:hidden cursor-pointer z-50 text-black"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              // Close Icon (X)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out lg:hidden ${
              showMenu
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-5 invisible"
            }`}
          >
            <ul className="flex flex-col items-center gap-y-6">
              {navLinks.map((link, index) => (
                <li key={index} className="font-inter text-sm hover:text-org duration-300 uppercase">
                  <Link to={link.path} onClick={handleMenuClick}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;