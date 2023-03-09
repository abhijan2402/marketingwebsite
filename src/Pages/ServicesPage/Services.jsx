import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Services.css";

import Fingerprint from '@mui/icons-material/Fingerprint';
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services_container">
        <div className="Our_Services">
          <div className="services_heading">
            <h1>Our Services</h1>
            <p>
              We provide a variety of marketing and promotion services to enable
              you and your business with innovative tools and strategies and
              attract more customers.
            </p>
          </div>
          <div className="services">
            <div className="service_1">
              <AddBusinessIcon
                style={{ fontSize: "70px", marginBottom: "10px", color:"orange" }}
              />
              <h4 style={{color:"orange"}}>Markiting</h4>
              <p>
                Helping you reach people's eyes, and stay in their hearts. What
                is more powerful than a strong message? <br /><br />
                - Ad Campaigns <br />
                - Social Media <br />
                - Content Strategy <br />
                - Photo & Video <br />
              </p>
            </div>
            <div className="service_1">
              <BrandingWatermarkIcon
                style={{ fontSize: "70px", marginBottom: "10px", color:"#ff3838" }}
              />
              <h4 style={{color:"#ff3838"}}>Branding</h4>
              <p>
                We understand in this ever-growing market, standing out can be
                as simple as translating the soul of your brand.  <br /><br /> -
                Identity <br /> - Positioning <br /> - Strategy <br /> -
                Messaging and Tone
              </p>
            </div>
            <div className="service_1">
        <Fingerprint style={{ fontSize: "70px", marginBottom: "10px", color:"green" }} />

              <h4 style={{color:"green"}}>Design</h4>
              <p>
                You focus on the ideas, we'll give you the visuals that'll make
                it memorable. <br /> <br />
                - Websites <br />
                - UI/UX <br />
                - 3D Rendering <br />- Animation & Graphics
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
