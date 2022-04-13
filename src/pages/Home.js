import { Link } from "react-router-dom";
import Service from "../components/Service";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-header">
        <div className="home-header-text">
          <h2> Recovery Security </h2>
          <h4> Top Recovery Solution In The World </h4>
          <h6> We Provide Unbeatable Recovery Solutions </h6>
        </div>
        <div className="home-header-btn">
          <Link to="/services"> Explore More </Link>
          <Link to="/contact"> Contact Us </Link>
        </div>
      </div>
      <div className="services-page">
        <h4> Our Top Services </h4>
        <div className="services-flex">
          <Service title="ROMANCE SCAM RECOVERY" imgpath="2" text="" />
          <Service title="CRYPTOCURRENCY SCAM RECOVERY" imgpath="8" text="" />
          <Service title="PRIVATE INVESTIGATIONS" imgpath="6" text="" />
        </div>
      </div>
      <div className="services-page">
        <h4> Our Promise To You </h4>
        <div className="services-flex promise">
          <Service title="DELIGENCE" imgpath="10" text="" />
          <Service title="ACCOUNTABILITY" imgpath="11" text="" />
          <Service title="CLIENT CENTRIC" imgpath="12" text="" />
        </div>
      </div>
      <div className="about-page">
        <div className="about-flex">
          <div className="about-img">
            <img src="./img/13.jpg" alt="" />
          </div>
          <div className="about-text home">
            <p>
              Make A Choice Today.
              <span> You Can't Go Wrong With Us </span>
              Begin the recovery process today, the earlier you reach out to us
              the better, it increases the chances of getting your money back.
              <Link to="/contact"> Contact Us </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
