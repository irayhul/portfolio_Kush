import React, { useEffect,Fragment } from "react";

import { BiSolidPhotoAlbum } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaMobile,FaLaptop,FaHeadphones  } from "react-icons/fa";
import { IoIosTabletLandscape } from "react-icons/io";
import { SiWalkman } from "react-icons/si";
import { FcCellPhone } from "react-icons/fc";
import { FaUbuntu } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Banner from "./Banner/Banner.jsx";
import "./Home.css";
import MetaData from "../MetaData";
import { Typography } from "@mui/material";
import TimeLine from "../TimeLine/TimeLine.jsx";
import YoutubeCard from "../YoutubeCard/YoutubeCard.jsx";
import Card from "../Card/Card.jsx"
const Home = ({ timelines,gallerys,youtubes,skills }) => {
  useEffect(() => {
  return window.addEventListener("scroll", () => {
 

      const skillsBox = document.getElementById("homeskillsBox");

      if (window.scrollY > 1500) {
        skillsBox.style.animationName = "homeskillsBoxAnimationOn";
      } else {
        skillsBox.style.animationName = "homeskillsBoxAnimationOff";
      }
    });
  }, []);


  return (
  
      <Fragment>
         <MetaData title="Kush Uttmani" />
     <div className="home">
      <Banner/>
       <div className="homeContainer">
        <Typography variant="h3">SCHEDULE</Typography>
       <TimeLine timelines={timelines}/>
      </div>

      <div className="homeSkills">
        <Typography variant="h3">PRODUCTS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
             
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
             
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
            
          </div>


          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
            
          </div> 
        </div>

        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <FaMobile  />
          <FaLaptop  />
          <FaHeadphones />
          <IoIosTabletLandscape />
          <SiWalkman />
          <FaUbuntu />
          <FaApple />
          <FcCellPhone />
        </div>
      </div>


  <div className="homeYoutube">
        <Typography variant="h3">Gallery <BiSolidPhotoAlbum /></Typography>
        

        <div className="homeYoutubeWrapper">

 {gallerys.map((item) => (
            <Card
            title={item.title}
            subtitle={item.subtitle}
              image={item.image.url}
              id={item._id}
              key={item._id}
            />
          ))}



          </div>

</div>




<div className="homeYoutube">
        <Typography variant="h3" style={{ color: 'red' }}>YOUTUBE <TfiYoutube /> </Typography>

        <div className="homeYoutubeWrapper">
          {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
      </Fragment>
  );
};

export default Home;