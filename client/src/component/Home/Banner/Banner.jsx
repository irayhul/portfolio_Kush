import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>KUSH</h1>
                    <p>
                   I Am Kush Uttmani, a proficient mobile repair expert, offers comprehensive solutions for your device-related concerns. With a wealth of experience in the field, Kush Uttmani guarantees expert services tailored to meet your needs. Trust in Kush Uttmani's expertise for reliable and efficient mobile repair services that ensure optimal performance for your devices.
                    </p>
                    <div className="ctas">
                        

                        <div className="banner-cta">
    <a href="/weights">Shopping</a>
</div>
                    </div>
                    
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;