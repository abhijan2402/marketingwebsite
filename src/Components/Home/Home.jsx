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
            {/* <h1>I'm Mark</h1> */}
            <h3>Welcome to modern day marketing</h3>
          </div>
          <div className="me_details_skills">
            <div className="me_details_skill1">
              <h5>
                I'm 
              </h5>
              <h1>Real-estate</h1>
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
              <div className="me_details_skill2" style={{display:"flex",flexDirection: 'column',}}>
                <h5>
                  <span>Explore</span>
                </h5>
                <h1>Other Brands</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
