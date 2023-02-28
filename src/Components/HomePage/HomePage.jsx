import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "@mui/material/Button";
import { db } from "../../firebase";
import { collection, query, getDocs } from "firebase/firestore";

import Card from "../Card/Card";

const HomePage = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPostData();
  }, []);
  const getPostData = async () => {
    let resultArray = [];
    const queryRef = query(collection(db, "orderItems"));
    return getDocs(queryRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        resultArray.push({ id: doc.id, ...doc.data() });
      });
      setPosts(resultArray);
    });
  };
  return (
    <>
      <Navbar />
      <div className="container_1">
        <div className="container_2">
          <div className="headline">
            <h1>THIS IS</h1>
            <h1>MODERN DAY</h1>
            <h1>Marketing Agency</h1>
          </div>
          <div className="content_block">
            {posts &&
              posts.map((item, index) => (
                <Card
                  key={index}
                  onclick={() => {
                    navigate("/PublicDetails", { state: item });
                  }}
                  postData={item}
                />
              ))}
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
                Our agency believes in enabling a culture that embraces the
                colorful world we live in and using data-driven insights to
                better connect brands with people's souls and dreams.
              </p>
              <div className="links">
                <Link
                  to="https://www.youtube.com/"
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

export default HomePage;
