import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./contact.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact_container">
        <div className="Contact">
          <div className="services_heading">
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Send us a question or comment with the
              form below and we'll be in touch with you as soon as possible.{" "}
            </p>
          </div>
          <div className="contact_details">
            <div className="form">
              <form className="form">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  className="input_filed1"
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  className="input_filed"
                  style={{ marginTop: "20px" }}
                />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Your Number"
                  variant="outlined"
                  className="input_filed"
                  style={{ marginTop: "20px" }}
                />
                <br />
                <textarea
                  name="message"
                  id="message"
                  cols="50"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="msg_input"
                ></textarea>
              </form>
              <Button variant="contained">Send Message</Button>
            </div>

            <div className="img">
              <div className="cnt_img"></div>
              <div className="media_icons">
                <Link to="https://www.youtube.com/" target="_blank" style={{textDecoration:"none"}}>
                  <YouTubeIcon
                    style={{ fontSize: "50px" }}
                    className="youtube"
                  />
                </Link>
                <Link to="https://www.facebook.com/MDMA.Studio" target="_blank" style={{ textDecoration: "none" }}>
                  <FacebookIcon
                    style={{ fontSize: "50px" }}
                    className="facebook"
                  />
                </Link>
                <Link to="https://www.instagram.com/moderndaymarketingagency/" target="_blank" style={{ textDecoration: "none" }}>
                  <InstagramIcon
                    style={{ fontSize: "50px" }}
                    className="instagram"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
