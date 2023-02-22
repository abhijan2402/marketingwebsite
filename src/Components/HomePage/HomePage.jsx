import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import './HomePage.css'

import  Card  from "../Card/Card";

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
            <Link style={{textDecoration:"none", color:"black"}} to="/PublicDetails"> <Card/> </Link>
            <Card/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
