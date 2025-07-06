import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import { Outlet } from "react-router"


const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Root