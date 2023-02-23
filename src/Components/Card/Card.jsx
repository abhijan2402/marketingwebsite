import React from "react";
import pic from '../../assest/bg_im.jpg';
import './Card.css';
const Card = () => {
  return (
    <>
      <div className="card">
        <div>
            <img src={pic} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
            <p className="card_date">14 April 2021</p>
            <p className="card-text">
                Iris launches 'Carbon kickback' incentivising clients to fight climate change
            </p>
        </div>
      </div>
    </>
  );
};

export default Card;
