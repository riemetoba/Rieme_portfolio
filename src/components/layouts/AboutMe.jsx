import { Link } from "react-router-dom";
import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import aboutFake from "/src/assets/aboutFake.png"
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";




const AboutMe = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
         <h3 className="font-inter text-2xl md:text-3xl font-black ml-2 relative">ABOUT ME <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span></h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10 ml-2">A passionate front-end developer based in bangladesh</p>
        <Flex className={"md:justify-between flex flex-col mt-20"}>
          {/* Image er jonno  */}
         <div className="border-white border-12 rounded relative">
          <Image src={aboutFake}/>
         <Link to={"https://github.com/riemetoba"}>
          <div className="absolute flex items-center justify-center w-10 h-12 md:w-13 md:h-15 bg-org top-8 left-0 border-white border-b-10 border-r-10 border-t-10"><FaGithub className="text-[22px]  text-white"/></div>
         </Link>
         <Link to={"https://www.facebook.com/profile.php?id=100016533453052"}>
          <div className="absolute flex items-center justify-center w-10 h-12 md:w-13 md:h-15 bg-org top-20 left-0 border-white border-b-10 border-r-10 border-t-10"><FaFacebook className="text-[22px]  text-white"/></div>
         </Link>
         <Link to={"https://www.linkedin.com/in/rieme-hasan-291767398"}>
          <div className="absolute flex items-center justify-center w-10 h-12 md:w-13 md:h-15 bg-org top-32 left-0 border-white border-b-10 border-r-10 border-t-10"><FaLinkedin className="text-[22px]  text-white"/></div>
         </Link>
         </div>
          {/* Image er jonno  */}
          <div className="ml-12 text-left">
            <h3 className="md:text-2xl text-lg font-inter font-bold">I'M Rieme Hasan</h3>
            <p className="md:text-[20px] text-base font-inter pt-3 pb-6">A Passionate <span className="text-org">Front-End</span> Developer Based in <span className="text-org"> Bangladesh</span></p>
            <p className="text-[#555A64] text-base font-inter w-150 leading-6.5">I’m a frontend developer who enjoys turning Figma designs into clean, responsive, and engaging user interfaces. I work with HTML, Bootstrap, Tailwind CSS, and React.js to build modern, component-based web experiences. I care deeply about visual accuracy, usability, and writing maintainable code that brings designs to life. Check out my Portfolio</p>
             <div className="flex items-center gap-x-12 mt-10">
            <div className="">
              <p className="text-sm font-inter pb-4">Birthday <span className="ml-6 text-[#CCCCCC]">|</span> <span className="ml-4 text-[#555A64]">26th December 1997</span></p>
              <p className="text-sm font-inter pb-4">Address <span className="ml-6 text-[#CCCCCC]">|</span> <span className="ml-4 text-[#555A64]">Dhaka, Bangladesh</span></p>
            </div>
            <div className="">
              <p className="text-sm font-inter pb-4">E-mail <span className="ml-6 text-[#CCCCCC]">|</span> <span className="ml-4 text-[#555A64]">riemehasan06@gmail.com</span></p>
              <p className="text-sm font-inter pb-4">Phone <span className="ml-6 text-[#CCCCCC]">|</span> <span className="ml-4 text-[#555A64]">01577043696</span></p>
            </div>
          </div>
         <button className="py-3 px-6 mt-9 bg-org text-[#ffffff] font-inter font-medium uppercase hover:text-white hover:bg-black duration-300">Download CV</button>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default AboutMe