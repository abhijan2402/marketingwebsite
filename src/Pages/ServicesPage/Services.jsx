import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Services.css";

import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';

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
              <AddBusinessIcon style={{fontSize:"50px", marginBottom:"10px"}}/>
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
            <BrandingWatermarkIcon style={{fontSize:"50px", marginBottom:"10px"}}/>
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
            <DesignServicesIcon style={{fontSize:"50px", marginBottom:"10px"}}/>
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
      </div>
    </>
  );
};

export default Services;
