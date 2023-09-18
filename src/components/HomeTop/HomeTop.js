import React, { useState } from "react";
import "./HomeTop.css"
import WorkCard from "../Work/WorkCard"
import EmissionCalculator from "../Emission/EmissionCalculator"
//import LoadingScreen from "../LoadingScreen/LoadingScreen"; 


//Branding
import BottomLogo from "../../images/Projects/BottomLogo/White-logo.png"

//Middle East
import ba1Image from "../../images/Projects/BA/image5.png"
import ba2Image from "../../images/Projects/BA/image2.png"
import ba3Image from "../../images/Projects/BA/image3.png"
import ba4Image from "../../images/Projects/BA/image4.png"
import ba5Image from "../../images/Projects/BA/image1.png"
import ba6Image from "../../images/Projects/BA/image6.png"

//TFL
import TFL01 from "../../images/Projects/TFL/image1.jpeg"
import TFL02 from "../../images/Projects/TFL/image2.jpeg"
import TFL03 from "../../images/Projects/TFL/image3.jpeg"
import TFL04 from "../../images/Projects/TFL/image4.jpeg"
import TFL06 from "../../images/Projects/TFL/Vid01.mp4"

//Iot
import IoTVid01 from "../../images/Projects/IoT/IoT.mp4"
import IoTVid02 from "../../images/Projects/IoT/IMG_3778.mp4"

const HomeTop = () => {
  const [fontSize, setFontSize] = useState(16)
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [mediaUrls, setMediaUrls] = useState([])
  //const [isLoading, setIsLoading] = useState(true);

  const handleFontSizeChange = e => {
    setFontSize(e.target.value)
  }

  const handleLinkClick = (...mediaUrls) => {
    setMediaUrls(mediaUrls)
    setIsCardOpen(true)
  }

  const handleCloseCard = () => {
    setIsCardOpen(false)
  }

  //useEffect(() => {
    //const timer = setTimeout(() => {
      //setIsLoading(false);
    //}, 3000); 

    //return () => clearTimeout(timer); 
 // }, []);

  return (
    <div className="home-top-container" style={{ fontSize: `${fontSize}px` }}>
       
      <h1 className="title">
        Hello, I'm Jack!{" "}
        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
      </h1>
      <h2 className="subhead">I'm an information designer.</h2>
      <div className="body-copy">
        <p>
          Who explores how storytelling and narratives can be used to examine
          complex systems, like economics, politics and much more! My work is
          based on the idea that playfulness and curiosity can lead to insights
          about the world around us. I'm interested in using research and design
          thinking to create experiences that engage people with the systems
          that shape our lives.{" "}
          <i class="fa fa-object-group" aria-hidden="true"></i>
        </p>
        <h2 className="subhead">What i'm doing.</h2>

        <p>
          I've gone back to school! I am studdying an MA in Digital Direction at
          the <a href="https://www.rca.ac.uk/">Royal College of Art</a> where
          I'm planing to investigate water depletion as a consequence of climate
          change. <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
          <br></br>
          <br></br>Alongside my studies, I'm also consulting a UK water suply
          company to help them transition to an automation!{" "}
          <i className="fa fa-tint" aria-hidden="true"></i>
        </p>

        <h2 className="subhead">What i've done.</h2>
        <p>
          In 2022/2023, I was having fun at{" "}
          <a href="https://girardot.co.uk/">Girardot Design,</a> where I had the
          opportunity to work with prestigious brands like Guinness Global
          Investors, Goldman Sachs, and Elmwood Warm Spaces. I was involved in
          the rebrand of the Royal Opera House and experimented with new ways of
          telling stories through branding and advertising. I'm proud of the
          work we've done and feel chufed to have worked with such distinguished
          clients. <i class="fa fa-briefcase" aria-hidden="true"></i>
        </p>
        <p>
          In 2021, I noticed a significant reduction in the Western media's
          coverage of the Middle East. This inspired me to pursue my
          dissertation,{" "}
          <span
            onClick={() =>
              handleLinkClick(
                ba1Image,
                ba2Image,
                ba3Image,
                ba4Image,
                ba5Image,
                ba6Image
              )
            } // Use the imported image variable here
            onKeyPress={() => handleLinkClick(ba1Image, ba2Image, ba3Image,ba4Image,ba5Image,ba6Image)} 
            role="button" 
            tabIndex="0"
            style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}
            
          >
            "A New Way of Seeing: Visualizing the Middle East Conflict,"
          </span>
          . In this work, I explore how information design can help us
          understand the human and political scale of the region's destruction
          and displacement. <i class="fa fa-circle" aria-hidden="true"></i>
        </p>
        <p>
          My exploration in 2020 further led me to the texts of Jeremy Rifkin
          text presents an overview of current social, economic and
          technological transformations. His overarching narrative offers
          exciting insights but is also a bit overwhelming. To help make his
          ideas more accessible, I created{" "}
          <span
            onClick={() => handleLinkClick(IoTVid01, IoTVid02)} // Use the imported image variable here
            style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline' }}
            onKeyPress={() => handleLinkClick(ba1Image, ba2Image, ba3Image,ba4Image,ba5Image,ba6Image)} 
            role="button" 
            tabIndex="0"
          >
            "The Rifkin Lens: A Glimpse into What's Next,"{" "}
          </span>
          an interactive museum experience that families can explore from home.
          This allows them to engage with Rifkin's ideas and consider the
          implications for our future.{" "}
          <i class="fa fa-laptop" aria-hidden="true"></i>
        </p>
        <p>
          Back in 2019 while at Central Saint Martins, I collaborated with
          Transport for London on a project to promote cycling in the city. My
          proposal was{" "}
          <span
            onClick={() => handleLinkClick(TFL06, TFL01, TFL02, TFL03, TFL04)} // Use the imported image variable here
            onKeyPress={() => handleLinkClick(ba1Image, ba2Image, ba3Image,ba4Image,ba5Image,ba6Image)} 
            role="button" 
            tabIndex="0"
            style={{ cursor: 'pointer', color: 'white', textDecoration: 'underline',}}
          >
            "Explore Your City: Your Two-Hour Starter Kit,"
          </span>{" "}
          an interactive museum experience that allows students to use a
          two-hour access card for free use of Santander Cycles. This helps
          students get to know the city and make connections with their new
          flatmates. <i class="fa fa-bicycle" aria-hidden="true"></i>
        </p>
        <div className="sliderContainer">
          <i className="fa fa-text-height" aria-hidden="true"></i>
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="slider"
          />

          {/* Repeat for other links with different details */}

          <WorkCard
            mediaUrls={mediaUrls}
            onClose={handleCloseCard}
            isOpen={isCardOpen}
          />
        </div>
        <EmissionCalculator />
        <img src={BottomLogo} alt="Company Logo" className="logo" />
      </div>
    </div>
  )
}

export default HomeTop
