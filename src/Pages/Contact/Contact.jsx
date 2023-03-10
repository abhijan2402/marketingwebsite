import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./contact.css";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [category,setCategory]=useState('');

  const sendFeedback = async () => {
    if (name === "" || email === "" || feedback === "") {
      toast.error("Enter all the fields!!!");
    } else {
      return addDoc(collection(db, "Feedback"), {
        Email: email,
        Message: feedback,
        Name: name,
        category:category
      })
        .then((docRef) => {
          toast("Feedback is submitted,Thank You!!!");
          setName("");
          setEmail("");
          setFeedback("");
          return docRef.id;
        })
        .catch((e) => {
          toast.error("Some thing went wrong, Please try again");
        });
    }
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="contact_container">
        <div className="Contact">
          <div className="contact_heading">
            <h1>Feedback</h1>
            <p>
              We'd love to hear from you! Send us a question or comment with the
              form below and we'll be in touch with you as soon as possible.{" "}
            </p>
          </div>
          <div className="contact_details">
            <div className="form">
              <form className="form">
                <TextField
                  value={name}
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  className="input_filed1"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <TextField
                  value={email}
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  className="input_filed"
                  style={{ marginTop: "20px" }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <div className="dropdown">
                  <select value={category} name="services" className="services" onChange={(value)=>setCategory(value.target.value)}>
                    <option value="" disabled selected hidden className="question">
                      What we can do for you?
                    </option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Branding">Branding</option>
                  </select>
                </div>
                <textarea
                  value={feedback}
                  name="message"
                  id="message"
                  cols="50"
                  rows="5"
                  placeholder="Enter Your Message"
                  className="msg_input"
                  onChange={(e) => {
                    setFeedback(e.target.value);
                  }}
                ></textarea>
              </form>
              <Button onClick={sendFeedback} variant="contained">
                Send Message
              </Button>
            </div>

            <div className="img">
              <div className="cnt_img"></div>
              <div className="media_icons">
                <Link
                  to="https://www.youtube.com/@moderndaymarketingagency749"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <YouTubeIcon
                    style={{ fontSize: "50px" }}
                    className="youtube"
                  />
                </Link>
                <Link
                  to="https://www.facebook.com/MDMA.Studio"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <FacebookIcon
                    style={{ fontSize: "50px" }}
                    className="facebook"
                  />
                </Link>
                <Link
                  to="https://www.instagram.com/moderndaymarketingagency/"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
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
