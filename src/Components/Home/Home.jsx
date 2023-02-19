import React from "react";
import {Link} from 'react-router-dom';
import Button from "@mui/material/Button";
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
              <h5>I'm a <span>minimalist</span></h5>
              <h1>Designer</h1>
            </div>
            <div className="me_details_skill2">
              <h5>I'm a  <span>creative</span></h5>
              <h1>Developer</h1>
            </div>
          </div>
          <div className="main_content">
            <Link style={{textDecoration:"none"}} to="/PublicDetails">  <Button variant="contained">Cute Cloud</Button> </Link>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Home;
