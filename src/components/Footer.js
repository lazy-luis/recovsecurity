import { BsTelephone } from "react-icons/bs";
import { BiEnvelopeOpen } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = ({ currentPage, updatePage }) => {
  return (
    <footer>
      <div className="footer-menus">
        <div className="footer-name">
          <h4> Recover Security </h4>
        </div>
        <div className="footer-parent-links">
          <h4> Quick Links </h4>
          <Link to="/">Home</Link>
          <Link to="about">About Us</Link>
          <Link to="services">Our Services</Link>
          <Link to="faqs">FAQs</Link>
          <Link to="contact">Contact Us</Link>
        </div>
        <div className="footer-parent-links">
          <h4> Quick Contact </h4>
          <p>
            <BsTelephone /> +1-424-409-5126
          </p>
          <p>
            <BiEnvelopeOpen /> info@recov-security.com
          </p>
        </div>
      </div>
      <div className="copyright-tag">
        <p> &copy; 2022 | Recovery Security </p>
      </div>
    </footer>
  );
};

export default Footer;
