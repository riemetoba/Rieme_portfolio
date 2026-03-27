import { Outlet } from "react-router-dom"
import Header from "./Header"
import Contact from "./Contact"


const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Contact/>
    </>
  )
}

export default RootLayout