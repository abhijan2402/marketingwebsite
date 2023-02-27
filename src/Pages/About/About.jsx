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
            <p>
              We are a team of talented marketers who love creating smart ideas
              for clients that appreciate uniqueness. We use our creative
              potential to provide the best ideas. We have a wide range of
              experience, expertise and tools to create and implement your
              campaigns, from carefully curating awesome content to optimising
              it with our great SEO powers as well as outdoor marketing skills.
              We are a team of talented marketers who love creating smart ideas
              for clients that appreciate uniqueness. We use our creative
              potential to provide the best ideas. We have a wide range of
              experience, expertise and tools to create and implement your
              campaigns, from carefully curating awesome content to optimising
              it with our great SEO powers as well as outdoor marketing skills.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
