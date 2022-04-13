import { HiChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Sidebar = ({ currentPage, updatePage, Sidebar, updateSideBar }) => {
  return (
    <aside>
      <div
        onClick={updateSideBar}
        className={Sidebar ? "aside-backdrop active" : "aside-menu"}
      ></div>
      <div className={Sidebar ? "aside-menu active" : "aside-menu"}>
        <button onClick={updateSideBar}>
          <HiChevronDoubleRight />
        </button>
        <ul>
          <Link
            className={currentPage === "home" ? "active" : undefined}
            onClick={() => {
              updateSideBar();
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            to="about"
            className={currentPage === "about" ? "active" : undefined}
            onClick={() => {
              updateSideBar();
            }}
          >
            About Us
          </Link>
          <Link
            to="services"
            className={currentPage === "services" ? "active" : undefined}
            onClick={() => {
              updateSideBar();
            }}
          >
            Our Services
          </Link>
          <Link
            to="faqs"
            className={currentPage === "faqs" ? "active" : undefined}
            onClick={() => {
              updateSideBar();
            }}
          >
            FAQs
          </Link>
          <Link
            to="contact"
            className={currentPage === "contact" ? "active" : undefined}
            onClick={() => {
              updateSideBar();
            }}
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
