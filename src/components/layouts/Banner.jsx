import Container from "../Container";
import Image from "../Image";
import toba from "/src/assets/toba.png";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="bg-white py-10 lg:py-25">
      <Container>
        <div
          className={
            "lg:justify-between items-center flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row"
          }
        >
          <div className="px-2 lg:px-0">
            <h3 className="pt-6 pb-2 text-xl lg:text-3xl font-inter font-medium">
              Hello there
            </h3>
            <h1 className="text-2xl md:text-[30px] lg:text-[48px] font-bold text-black mb-5">
              <span className="mr-3">I'm</span>
              <Typewriter
                words={["Rieme Hasan", "a Front-End Developer"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1500}
              />
            </h1>
            <p className="text-sm lg:text-base font-inter leading-relaxed pb-4 text-[#555A64]">
              Bringing designs to life with clean code and modern frontend
              technologies.
            </p>
            <div className="flex items-center gap-x-5">
              <button className="py-3.5 px-6 mt-9 bg-org text-[#ffffff] font-inter font-medium uppercase hover:text-white hover:bg-black duration-300">
                My Work
              </button>
              <button className="py-3 px-7 mt-9 border-2 border-org text-org font-inter font-medium uppercase hover:text-white hover:bg-org duration-300">
                Hire Me
              </button>
            </div>
          </div>
          {/* image  */}
          <div className="">
            <Image src={toba} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
