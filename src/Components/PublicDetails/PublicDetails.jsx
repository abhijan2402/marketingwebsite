import React, { useEffect, useState } from "react";
import {Link,useLocation} from 'react-router-dom';
import "./PublicDetails.css";
import Button from '@mui/material/Button';
import pic from "../../assest/bg_im.jpg";
import Navbar from '../Navbar/Navbar';

const PublicDetails = () => {
  const location=useLocation();
  const [postData,setPostData]=useState('');
  useEffect(()=>{
    setPostData(location.state);
  },[])
  return (
    <>
      <Navbar/>
      {
        postData &&
        <div className="container_1">
          <div className="container_2">
            <div className="main_img">
              <img src={postData.titleMainImage} alt="" />
            </div>
            <div className="content">
              <div className="main_heading">
                <p>
                  {postData.heading}
                </p>
                <h6>{postData.uploadedData}</h6>
              </div>
              <div className="main_content">
                <p>
                  {postData.subHeading}
                </p>
                {
                  postData.images.map((image,index)=>(
                    <img key={index} src={image} alt="" />
                  ))
                }
                {
                  postData.videos.map((video,index)=>(
                    <video width="250"  controls >
                      <source src={video} />
                    </video>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default PublicDetails;
