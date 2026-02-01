import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import clientOne from "/src/assets/clientOne.png"

const Testimonial = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
        <h3 className="font-inter text-3xl uppercase font-black relative">
          Testimonials
          <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span>
        </h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-15">
          A passionate front-end developer based in bangladesh
        </p>
       <Flex className={"justify-between"}>
         <div className="bg-[#ffffff] w-140 h-55 py-6 px-8 border border-[#EEDDDD]">
            <Flex className={"gap-x-5 items-start"}>
                <Image src={clientOne}/>
                <div className="flex flex-col">
                    <p className="font-inter text-base text-[#555A64]">Amazing frontend developer! Delivered a pixel-perfect, responsive site using React and Tailwind. Clean code and super fast delivery. Highly recommended!</p>
                    <p className="font-inter text-2xl text-[#090A0C] pt-3 pb-2 font-bold">Ferdous Munmun</p>
                    <p className="font-inter text-base text-[#555A64] font-bold">Fiverr Client</p>
                </div>
            </Flex>
        </div>
         <div className="bg-[#ffffff] w-140 h-55 py-6 px-8 border border-[#EEDDDD]">
            <Flex className={"gap-x-5 items-start"}>
                <Image src={clientOne}/>
                <div className="flex flex-col">
                    <p className="font-inter text-base text-[#555A64]">Top-notch work! she provided a super-fast, modern UI that works perfectly on all devices. The code structure is very professional. Best developer I've hired so far!</p>
                    <p className="font-inter text-2xl text-[#090A0C] pt-3 pb-2 font-bold">Jannatul Ferdaush Arshe </p>
                    <p className="font-inter text-base text-[#555A64] font-bold">Fiverr Client</p>
                </div>
            </Flex>
        </div>
       </Flex>
      </Container>
    </div>
  );
};

export default Testimonial;
