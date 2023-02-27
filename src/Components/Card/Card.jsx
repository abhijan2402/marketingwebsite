import React from "react";
import pic from '../../assest/bg_im.jpg';
import './Card.css';
const Card = ({postData,onclick}) => {
  return (
    <>
    <button onClick={onclick} className="main_card">
      <div className="card">
          <div>
              <img src={postData.titleMainImage} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
              <p className="card_date">{postData.uploadedData}</p>
              <p className="card-text">
                {postData.heading}
              </p>
          </div>
        </div>
    </button>
     
    </>
  );
};

export default Card;
