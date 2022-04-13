import React from "react";

const Service = ({ title, imgpath, text }) => {
  return (
    <div className="service-flex">
      <div className="service">
        <div
          className="service-img"
          style={{ backgroundImage: 'url("./img/' + imgpath + '.jpg")' }}
        ></div>
        <div className="service-text">
          <h3> {title} </h3>
          <p> {text} </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
