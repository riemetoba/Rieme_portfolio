import Container from "../Container";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import Image from "../Image";
import workOne from "/src/assets/workOne.png";
import workTwo from "/src/assets/workTwo.png";
import workThree from "/src/assets/workThree.png";

const Work = () => {
  return (
    <div id="projects" className="py-25 bg-[#ffffff]">
      <Container>
        {/* Header Section */}
        <h3 className="font-inter uppercase text-3xl font-black relative">
            Latest Work
            <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
          </h3>
          <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10">
            A passionate front-end developer based in bangladesh
          </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ================= Project 1 Start ================= */}
          <div className="group bg-white rounded-3xl border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={workOne}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                React Tailwind
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                E-Commerce
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                Responsive e-commerce platform optimized for a smooth shopping flow.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 1 End ================= */}
          {/* ================= Project 2 Start ================= */}
          <div className="group bg-white rounded-3xl  border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={workTwo}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                Html Css
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://riemetoba.github.io/Hancok/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://riemetoba.github.io/Hancok/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                Website
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                Immersive gaming hub with a premium UI and seamless navigation.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 2 End ================= */}
          {/* ================= Project 3 Start ================= */}
          <div className="group bg-white rounded-3xl  border-gray-300 border overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative h-70 overflow-hidden">
              <Image
                src={workThree}
                alt="E-Commerce Website"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Category Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#090A0C] uppercase tracking-wide shadow-sm z-20">
                Bootstrap
              </div>

              {/* Hover Overlay Buttons */}
              <div className="absolute inset-0 bg-[#090A0C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-100"
                  title="View Live"
                >
                  <FaArrowRight className="-rotate-45 text-lg" />
                </a>
                <a
                  href="https://react-orebi-e-commerce.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#090A0C] hover:bg-org hover:text-white transition-all duration-300 scale-0 group-hover:scale-100 delay-200"
                  title="Github Code"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-0 h-1 bg-org transition-all duration-300 group-hover:w-full"></div>

              <h3 className="text-2xl font-bold text-[#090A0C] mb-3 group-hover:text-org transition-colors duration-300">
                Website
              </h3>
              <p className="text-[#555A64] text-[15px] leading-relaxed mb-6">
                Feature-rich online store with dynamic cart and checkout systems.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #react
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #redux
                </span>
                <span className="text-[12px] font-semibold text-[#555A64] bg-[#F3F4F6] px-3 py-1 rounded-md">
                  #tailwind
                </span>
              </div>
            </div>
          </div>
          {/* ================= Project 3 End ================= */}
        </div>
        {/* Bottom Button */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/riemetoba"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-4 border-2 border-org text-org font-bold uppercase tracking-widest text-sm rounded hover:bg-org hover:text-white transition-all duration-300"
          >
            View All Projects
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Work;
