import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";
import aboutFake from "/src/assets/aboutFake.png";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
        {/* Section title  */}
        <h3 className="font-inter text-2xl md:text-3xl font-black inline-block relative px-5 lg:px-0">
          ABOUT ME
          <span className="absolute left-5 -bottom-2 lg:left-0 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10 px-5 lg:px-0">
          A passionate front-end developer based in bangladesh
        </p>
        {/* Flex start  */}
        <div
          className={
            "flex lg:flex-row flex-col lg:items-center gap-12 lg:justify-between px-5 lg:px-0"
          }
        >
          {/* Left side start  */}
          {/* Image section  */}
          <div className="bg-[#ffffff] p-4 max-w-sm w-full rounded relative">
            <Image src={aboutFake} className={"w-full h-auto"} />
            {/* Image icons  */}
            <div className="absolute left-4 top-8 flex flex-col">
              <Link to="https://github.com/riemetoba" target="_blank">
                <div className="w-10 h-12 bg-org flex items-center justify-center border-white border-y-4 border-r-4">
                  <FaGithub className="text-white text-lg" />
                </div>
              </Link>

              <Link
                to="https://www.facebook.com/profile.php?id=100016533453052"
                target="_blank"
              >
                <div className="w-10 h-12 bg-org flex items-center justify-center border-white border-y-4 border-r-4 mt-2">
                  <FaFacebook className="text-white text-lg" />
                </div>
              </Link>

              <Link
                to="https://www.linkedin.com/in/rieme-hasan-291767398"
                target="_blank"
              >
                <div className="w-10 h-12 bg-org flex items-center justify-center border-white border-y-4 border-r-4 mt-2">
                  <FaLinkedin className="text-white text-lg" />
                </div>
              </Link>
            </div>
            {/* Image icons  */}
          </div>
          {/* Image section  */}
          {/* Left side end  */}
          {/* Right side start  */}
          <div className="w-full max-w-xl px-5 lg:px-o">
            <h3 className="text-xl md:text-2xl font-inter font-bold">
              I'M Rieme Hasan
            </h3>
            <p className="text-xl font-inter mt-3 mb-6">
              A Passionate <span className="text-org">Front-End</span> Developer
              Based in <span className="text-org"> Bangladesh</span>
            </p>
            <p className="text-[#555A64] text-base font-inter md:w-150 leading-relaxed">
              I’m a frontend developer who enjoys turning Figma designs into
              clean, responsive, and engaging user interfaces. I work with HTML,
              Bootstrap, Tailwind CSS, and React.js to build modern,
              component-based web experiences. I care deeply about visual
              accuracy, usability, and writing maintainable code that brings
              designs to life. Check out my Portfolio
            </p>
            {/* Information part start */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 mt-8 text-sm">
              <div className="">
                <p className="text-xs font-inter pb-4">
                  Birthday <span className="ml-6 text-[#CCCCCC]">|</span>{" "}
                  <span className="ml-4 text-[#555A64]">
                    26th December 1997
                  </span>
                </p>
                <p className="text-xs font-inter pb-4">
                  Address <span className="ml-6 text-[#CCCCCC]">|</span>{" "}
                  <span className="ml-4 text-[#555A64]">Dhaka, Bangladesh</span>
                </p>
              </div>
              <div className="">
                <p className="text-xs font-inter pb-4">
                  E-mail <span className="ml-9 md:ml-6 text-[#CCCCCC]">|</span>{" "}
                  <span className="ml-4 text-[#555A64] text-[10px]">
                    riemehasan06@gmail.com
                  </span>
                </p>
                <p className="text-xs font-inter pb-4">
                  Phone <span className="ml-9 md:ml-6 text-[#CCCCCC]">|</span>{" "}
                  <span className="ml-4 text-[#555A64]">01577043696</span>
                </p>
              </div>
            </div>
            <button className="py-3 px-6 mt-9 bg-org text-[#ffffff] font-inter font-medium uppercase hover:text-white hover:bg-black duration-300">
              Download CV
            </button>
            {/* Information part end */}
          </div>
          {/* Right side end  */}
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
