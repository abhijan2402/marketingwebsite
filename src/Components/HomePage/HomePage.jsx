import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';


import Card from "../Card/Card";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container_1">
        <div className="container_2">
          <div className="headline">
            <h5>News & Insights</h5>
            <h1>What we've been up to</h1>
          </div>
          <div className="content_block">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/PublicDetails"
            >
              
              <Card />
            </Link>

          </div>
        </div>



        
        <div className="footer">
          <div className="contact">
            <div className="location">
              <LocationOnIcon />
              <p>21 Lorem ipsum dolor sit amet. Paris, France</p>
            </div>
            <div className="phone">
              <PermPhoneMsgIcon />
              <p>+1 555 1245698516</p>
            </div>
            <div className="mail">
              <MailIcon />
              <p>akdsbkakja@2646gmail.com</p>
            </div>
          </div>
          <div className="links_abt">
            <div className="abt">
              <h5>About the Company</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi consectetur dolores sequi soluta labore voluptate sint
                debitis placeat odit ad.
              </p>
              <div className="links">
                <Link style={{textDecoration:"none"}}><LinkedInIcon style={{fontSize:"50px"}} className="linkedin"/></Link>
                <Link style={{textDecoration:"none"}}><FacebookIcon style={{fontSize:"50px"}} className="facebook"/></Link>
                <Link style={{textDecoration:"none"}}><InstagramIcon style={{fontSize:"50px"}} className="instagram"/></Link>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
