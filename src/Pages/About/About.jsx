import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import { padding } from "@mui/system";
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
            <Link to="/HomePage" style={{ textDecoration: "none" }}>
              {" "}
              <Button variant="contained">Learn More</Button>{" "}
            </Link>
          </div>
        </div>
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
              <h4>Markiting</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam, magni? Aliquam, dolorum quis et illum velit assumenda
                voluptas odio fugit provident dicta itaque molestias veniam?
                Totam labore beatae possimus modi placeat nemo temporibus,
                repellendus molestias consectetur! Debitis suscipit doloribus
                ducimus?
              </p>
            </div>
            <div className="service_1">
              <h4>Branding</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
                hic qui doloribus voluptatum unde, assumenda natus deserunt sed
                quibusdam pariatur ex, magnam error! Odit in, ex deleniti
                reprehenderit optio alias natus animi, necessitatibus cumque
                voluptates quo. Ad inventore laborum blanditiis.
              </p>
            </div>
            <div className="service_1">
              <h4>Graphic Design</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas et cupiditate repudiandae accusantium laborum molestiae
                earum quo necessitatibus eos? Impedit iure reprehenderit
                consequuntur sapiente? Eveniet, consequuntur iste voluptas
                voluptatem provident perferendis quaerat blanditiis fugit ut
                dolor quis quod nulla placeat?
              </p>
            </div>
          </div>
        </div>
        <div className="Contact">
          <div className="services_heading">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Send us a question or comment with the form below and we'll be in touch with you as soon as possible. </p>
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
             style={{marginTop:"20px"}}
              />
              <br />
              <TextField
                id="outlined-basic"
                label="Your Number"
                variant="outlined"
             className="input_filed"
             style={{marginTop:"20px"}}
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
            <Button variant="contained" >
              Send Message
            </Button>
          </div>

            <div className="img">
              <div className="cnt_img"></div>
              <div className="media_icons">
              <Link style={{textDecoration:"none"}} ><LinkedInIcon style={{fontSize:"50px"}} className="linkedin"/></Link>
                <Link style={{textDecoration:"none"}} ><FacebookIcon style={{fontSize:"50px"}} className="facebook"/></Link>
                <Link style={{textDecoration:"none"}}><InstagramIcon style={{fontSize:"50px"}} className="instagram"/></Link>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
