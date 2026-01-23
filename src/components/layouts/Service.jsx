import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import servOne from "/src/assets/servOne.png"
import servTwo from "/src/assets/servTwo.png"
import servThree from "/src/assets/servThree.png"
import servFour from "/src/assets/servFour.png"
import servFive from "/src/assets/servFive.png"
import servSix from "/src/assets/servSix.png"


const Service = () => {
  return (
    <div className="bg-[#EAEDF2] py-25">
      <Container>
        <h3 className="font-inter text-3xl font-black relative">MY SERVICES <span className="absolute left-0 -bottom-2 w-9 h-0.5 bg-org"></span></h3>
        <p className="font-inter uppercase text-sm text-[#555A64] pt-5 mb-10">A passionate front-end developer based in bangladesh</p>
        <Flex className={"justify-between"}>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servOne}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">Figma to Code</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I Convert Figma designs into clean, pixel-perfect frontend code.</p>
            </div>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servTwo}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">React Frontend</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I develop modern and interactive user interfaces using React and clean Javascript.</p>
            </div>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servThree}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">API Integration</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I Integrate backend APIs to display dynamic data and handle real-time interactions.</p>
            </div>
        </Flex>
        <Flex className={"justify-between"}>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servFour}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">Responsive Development</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I build mobile-first, fully responsive websites that look great on all screen sizes.</p>
            </div>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servSix}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">Perfomance Optimization</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I optimize frontend performance to ensure fast loading and smooth user experience.</p>
            </div>
            <div className="w-85 h-72 bg-white rounded-[5px] mt-8 px-7 py-9 shadow-2xl hover:bg-org duration-300 group">
                <Image className={"group-hover:brightness-0 group-hover:invert duration-300"} src={servFive}/>
                <h3 className="my-5 font-inter text-[18px] group-hover:text-white duration-300">Cross-Browser Support</h3>
                <p className="font-inter text-base text-[#555A64] group-hover:text-white duration-300">I ensure consistent design and functionality across all mordern browsers.</p>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Service