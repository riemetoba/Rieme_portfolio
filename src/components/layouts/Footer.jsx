import Button from "../Button"
import Container from "../Container"
import Flex from "../Flex"
import { IoLocationOutline } from "react-icons/io5";
import { TfiMobile, TfiEmail } from "react-icons/tfi";



const Footer = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
        <h3 className="font-inter uppercase text-3xl font-black relative">Get in touch <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span></h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10">A passionate front-end developer based in bangladesh</p>
        <Flex className={"justify-between items-start"}>
          <div className="bg-white w-170 h-90.5 px-6 py-5 shadow-2xl">
            <p className="font-inter uppercase text-[12px] text-[#090A0C] font-bold">say something</p>
           <div className="flex items-baseline justify-between gap-x-6 mt-10">
            <input type="text" className="border-b w-1/2 border-b-[#CCCCCC]" />
           <input type="text" className="border-b w-1/2 border-b-[#CCCCCC]" />
           </div>
           <input type="text" className="border-b border-b-[#CCCCCC] w-full mt-8"/>
           <input type="text" className="border-b border-b-[#CCCCCC] w-full mt-15" />
           <Button className={"py-3 px-6 mt-9 bg-org text-[#ffffff] font-inter font-medium uppercase hover:text-org hover:bg-transparent duration-300"} btnText={"send message"}/>
          </div>
          <div className="flex items-start flex-col gap-y-7">
            <div className="w-82.5 h-25.5 bg-white flex items-center gap-x-8 py-5 px-8 shadow-2xl">
             <div className="w-10 h-10 rounded-full bg-org flex items-center justify-center">
               <IoLocationOutline className="text-white text-2xl"/>
             </div>
             <div className="">
              <h5 className="text-base font-inter font-medium">Our Address</h5>
              <p className="text-sm font-inter text-[#555A64]">Lalbagh, Dhaka</p>
             </div>
            </div>
            <div className="w-82.5 h-25.5 bg-white flex items-center gap-x-8 py-5 px-8 shadow-2xl">
             <div className="w-10 h-10 rounded-full bg-org flex items-center justify-center">
               <TfiMobile className="text-white text-2xl"/>
             </div>
             <div className="">
              <h5 className="text-base font-inter font-medium">Our Phone</h5>
              <p className="text-sm font-inter text-[#555A64]">+8801577043696</p>
             </div>
            </div>
            <div className="w-82.5 h-25.5 bg-white flex items-center gap-x-8 py-5 px-8 shadow-2xl">
             <div className="w-10 h-10 rounded-full bg-org flex items-center justify-center">
               <TfiEmail className="text-white text-[22px]"/>
             </div>
             <div className="">
              <h5 className="text-base font-inter font-medium">Our Email</h5>
              <p className="text-sm font-inter text-[#555A64]">riemehasan06@gamil.com</p>
             </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer