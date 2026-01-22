import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import banner from "/src/assets/banner.png"


const Banner = () => {
  return (
   <div className="bg-white py-20">
    <Container>
        <Flex className={"justify-between"}>
            <div className="">
                <h3 className="text-2xl font-inter font-medium">Hello there</h3>
                <h1 className="text-6xl font-inter font-bold py-4">Rieme Hasan</h1>
                <p className="text-[20px] font-inter font-medium">I am a Frontend Developer</p>
                <p className="text-base font-inter leading-6 py-6 text-[#555A64]">Bringing designs to life with clean code and modern frontend technologies.</p>
                <div className="flex items-center gap-x-5">
                     <button className="py-3.5 px-6 mt-9 bg-org text-[#ffffff] font-inter font-medium uppercase hover:text-white hover:bg-black duration-300">My Work</button>
                     <button className="py-3 px-7 mt-9 border-2 border-org text-org font-inter font-medium uppercase hover:text-white hover:bg-org duration-300">Hire Me</button>
                </div>
            </div>
            <div className="">
                <Image src={banner}/>
            </div>
        </Flex>
    </Container>
   </div>
  )
}

export default Banner