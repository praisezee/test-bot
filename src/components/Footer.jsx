import { Link } from "react-router-dom";
import { FaBoltLightning, FaCompass, FaShield } from 'react-icons/fa6'
import { FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between align-items-center py-2 text-center px-3 bg-success text-light rounded-4">
      <Link className="nav-link my-auto">
        <FaHome className="h5 my-auto" /> <span className="text-medium my-auto">Home</span>
      </Link>
      <Link className="nav-link my-auto">
        <FaBoltLightning className="h5 my-auto" /> <span className="text-medium my-auto">Boost</span>
      </Link>

      <Link className="nav-link my-auto">
        <FaShield className="h5 my-auto" /> <span className="text-medium my-auto">Clan</span>
        <p className="text-muted text-small my-0">Coming soon...</p>
      </Link>
      <Link className="nav-link my-auto text-medium">
        <FaCompass className="h5 my-auto" /> <span className="text-medium my-auto">Quest</span>
        <p className="text-muted text-small my-0">Coming soon...</p>
      </Link>
    </div>
  )
}

export default Footer
