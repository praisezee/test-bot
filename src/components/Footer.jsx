import { Link } from "react-router-dom";
import { FaBoltLightning, FaCompass, FaShield } from 'react-icons/fa6'
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-2 text-center px-3 bg-custom text-light rounded-4 shadow-success">
      <Link className="nav-link my-auto">
        <FaHome className="h5 my-auto" /> <span className="text-medium my-auto">Home</span>
      </Link>
      <Link className="nav-link my-auto" to="/boost">
        <FaBoltLightning className="h5 my-auto" /> <span className="text-medium my-auto">Boost</span>
      </Link>

      <button className="nav-link my-auto btn" disabled>
        <FaShield className="h5 my-auto" /> <span className="text-medium my-auto">Clan</span>
        <p className="text-muted text-small my-0">Coming soon...</p>
      </button>
      <button disabled className="nav-link my-auto btn">
        <FaCompass className="h5 my-auto" /> <span className="text-medium my-auto">Quest</span>
        <p className="text-muted text-small my-0">Coming soon...</p>
      </button>
    </div>
  )
}

export default Footer
