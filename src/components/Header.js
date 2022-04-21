import { BsTelephone } from "react-icons/bs";
import { BiEnvelopeOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
const Header = ({ currentPage, updatePage, updateSideBar }) => {
  const location = useLocation();
  const myLocation =
    location.pathname.split("/")[1] === ""
      ? "home"
      : location.pathname.split("/")[1];
  updatePage(myLocation);
  return (
    <header>
      <div className="site-contact">
        <p>
          <BsTelephone /> +1-424-409-5126
        </p>
        <p>
          <BiEnvelopeOpen /> info@recov-security.com
        </p>
      </div>
      <div className="site-intro">
        <div className="site-logo">
          {/* <p> Recover Security </p> */}
          <img src="./img/logo.png" style={{ width: "200px" }} />
        </div>
        <div className="site-button">
          <button onClick={updateSideBar}>
            <FaBars />
          </button>
        </div>
        <div className="site-links">
          <Link
            className={currentPage === "home" ? "active" : undefined}
            to="/"
          >
            Home
          </Link>
          <Link
            to="about"
            className={currentPage === "about" ? "active" : undefined}
          >
            About Us
          </Link>
          <Link
            to="services"
            className={currentPage === "services" ? "active" : undefined}
          >
            Our Services
          </Link>
          <Link
            to="faqs"
            className={currentPage === "faqs" ? "active" : undefined}
          >
            FAQs
          </Link>
          <Link
            to="contact"
            className={currentPage === "contact" ? "active" : undefined}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
