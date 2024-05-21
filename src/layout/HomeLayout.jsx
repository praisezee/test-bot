import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const HomeLayout = () => {
  return (
    <div className="radial-bg">
      <div className="d-flex flex-column vh-100 container-md bg-custom-dark-95">
        <div className="flex-grow-1 overflow-y-auto h-fill">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </div>
    
  )
}

export default HomeLayout
