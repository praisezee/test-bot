import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const HomeLayout = () => {
  return (
    <div className="d-flex flex-column vh-100 container-md bg-black">
      <div className="flex-grow-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default HomeLayout
