import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                <div className="title" style={{ color: 'black' }}>About</div>
                    <div className="text">
                    KUSH UTTMANI MOBILE REPAIR EXPERT OUR WORK IS DONE SATISFACTORILY. WE BELIEVE IN PROVIDING THE BEST SERVICE..
                    </div>
                </div>
                <div className="col">
                    <div className="title"style={{ color: 'black' }}>Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                          Kushi Mobile Behind Railway Station Bhilwara 31001
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Cell-Phone: +919785717777</div>
                        
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email:kushuttmani7t8@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Services</div>
                    <span className="text">MOBILE</span>
                    <span className="text">REPAIR</span>
                    <span className="text">REFURBISHED</span>
                    <span className="text">MOBILE SELL</span>
                    <span className="text">LAPTOP</span>
                    
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        KUSH UTTMANI MOBILE REPAIR EXPERT <a href="https://www.instagram.com/rayhulshrma" target="_blank" rel="noopener noreferrer">RAHUL DEVELOPER</a> 
                    
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;