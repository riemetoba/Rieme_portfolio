import { Link } from "react-router-dom"
import Container from "../Container"
import Flex from "../Flex"


const Header = () => {
  return (
    <div className="py-4">
      <Container>
        <Flex className={"justify-between"}>
          <Link to={"/"}>
          <div className="">
            <h2 className="font-inter font-medium text-2xl">RIEME</h2>
          </div>
          </Link>
          <div className="">
            <ul className="flex items-center justify-between gap-x-7">
              <Link to={"/"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">Home</li>
              </Link>
              <Link to={"/aboutus"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">About Us</li>
              </Link>
              <Link to={"/"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">services</li>
              </Link>
              <Link to={"/"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">Portfolio</li>
              </Link>
              <Link to={"/"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">Blog</li>
              </Link>
              <Link to={"/"}>
              <li className="font-inter text-sm hover:text-org duration-300 uppercase">Contact</li>
              </Link>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header