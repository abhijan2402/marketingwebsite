import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
// import pic1 from "../../assest/mr3.png";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about_container">
        <div className="abt_container">
          <div className="main_bg">{/* <img src={pic1} alt="" /> */}</div>
          <div className="about">
            <h1>ABOUT US</h1>
            <p style={{ fontSize: "22px", marginTop: "5%" }}>
              MDMA was founded by Dharma Teja with a mission to liven up and add
              excitement to the marketing industry. Our agency believes in
              enabling a culture that embraces the colorful world we live in and
              using data-driven insights to better connect brands with people's
              souls and dreams. We approach every challenge with imagination and
              passion, striving to exceed our client’s expectations every time.
              With our unique combination of creativity and data-driven
              strategies, we're able to deliver exceptional results that truly
              stand out
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
