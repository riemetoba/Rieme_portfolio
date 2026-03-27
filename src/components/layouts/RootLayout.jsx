import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Contact"


const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout