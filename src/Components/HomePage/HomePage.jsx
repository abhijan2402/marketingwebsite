import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import pic from "../../assest/mr1.avif";
import pic2 from "../../assest/mr2.jpg";
import pic3 from "../../assest/mr3.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import MailIcon from "@mui/icons-material/Mail";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className="headline">
          <h1>THIS IS</h1>
          <h1>MODERN DAY</h1>
          <h1>Marketing Agency</h1>
          {/* <div
            id="carouselExampleControls"
            class="carousel slide h-100"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner ">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src={pic} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={pic2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={pic3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div> */}


          <Carousel autoPlay interval="2000" infiniteLoop showThumbs={false}>
            <div>
              <img src={pic} style={{ height: "400px" }} />
              {/* <p className="legend"></p> */}
            </div>
            <div>
              <img src={pic2} style={{ height: "400px" }} />
              {/* <p className="legend"></p> */}
            </div>
            <div>
              <img src={pic3} style={{ height: "400px" }} />
              {/* <p className="legend"></p> */}
            </div>
          </Carousel>

        </div>

        <div className="brands">
          <h2>
            Brands we've worked with <br /> (we can't wait to have yours here
            too!)
          </h2>
          <marquee width="100%" direction="right" height="100px">
            - Sepal - Hera - The Sanctuary Bar & Kitchen - Orka Cafe - Green
            Park Hotels - Wilderness Retreat Resort - Zozoz's PIzzeria -
            Telangana Spice Kitchen - Ultron Electronix - Avasa - Autumn Leaf
            Cafe - Shriya Som - Fix My Nutrition - Quiclo - Darzan
          </marquee>
          <marquee width="100%" direction="right" height="100px">
            - Sepal - Hera - The Sanctuary Bar & Kitchen - Orka Cafe - Green
            Park Hotels - Wilderness Retreat Resort - Zozoz's PIzzeria -
            Telangana Spice Kitchen - Ultron Electronix - Avasa - Autumn Leaf
            Cafe - Shriya Som - Fix My Nutrition - Quiclo - Darzan
          </marquee>
        </div>
        <div className="container_2">
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
              <p>
                C Space, C9MX+XCV, Rd Number 44, CBI Colony, Jubille Hills,
                Hyderabad, Teleangana 500033
              </p>
            </div>
            <div className="phone">
              <PermPhoneMsgIcon />
              <p>+91 9573174647</p>
            </div>
            <div className="mail">
              <MailIcon />
              <p>work@moderndaymarketingagency.com</p>
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

export default HomePage;
