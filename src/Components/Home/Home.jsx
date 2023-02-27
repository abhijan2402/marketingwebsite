import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="main_container">
        <div className="content">
          <div className="Me_details">
            <h5>Hello,</h5>
            <h1>I'm Mark</h1>
            <h6>Welcome to my site!</h6>
          </div>
          <div className="me_details_skills">
            <div className="me_details_skill1">
              <h5>
                I'm a <span>minimalist</span>
              </h5>
              <h1>Designer</h1>
            </div>
            <Link
              to="/HomePage"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              className="developer"
            >
              <div className="me_details_skill2">
                <h5>
                  I'm a <span>creative</span>
                </h5>
                <h1>Developer</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
