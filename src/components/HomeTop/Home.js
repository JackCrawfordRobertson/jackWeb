import React, { useState, useEffect } from "react"
import "./HomeTop.css"
import WorkCard from "../Work/WorkCard"
import EmissionCalculator from "../Emission/EmissionCalculator"
import LoadingScreen from "../LoadingScreen/LoadingScreen"

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
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50000) // Adjust time as needed

    return () => clearTimeout(timer) // Clear the timer when the component unmounts
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}

      <div className="home-top-container" style={{ fontSize: `${fontSize}px` }}>
        <h1 className="title">
          Hello, I'm Jack!{" "}
          <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
        </h1>
        <h2 className="subhead">I'm an information designer.</h2>
        <div className="body-copy">
          {/* About me */}
          <p>
            Who explores how storytelling and narratives can be used to examine
            complex systems, like economics, politics and much more! My work is
            based on the idea that playfulness and curiosity can lead to
            insights about the world around us. I'm interested in using research
            and design thinking to create experiences that engage people with
            the systems that shape our lives.{" "}
            <i class="fa fa-object-group" aria-hidden="true"></i>
          </p>
          <h2 className="subhead">What I'm doing.</h2>
          {/* what im doing now */}
          <p>
            I've gone back to school! I am studying an MA in Digital Direction
            at the <a href="https://www.rca.ac.uk/">Royal College of Art</a>{" "}
            where I am investigating how to streamline the pitching process
            between NGOs and international donors, when secureing funding to
            addressing water depletion as a consequence of climate change. The
            tool we are developing is named Maya{" "}
            <a href="https://maya.jack-robertson.co.uk">
              and you can view it by clicking here.
            </a>{" "}
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>{" "}
            <br></br>
            <br></br>Alongside my studies, I'm also consulting a UK water supply
            company to help them on their transition to automation.{" "}
            <i className="fa fa-tint" aria-hidden="true"></i>
          </p>
          <h2 className="subhead">What I've done.</h2>
          {/* Girardot */}
          <p>
            In 2022/2023, I was having fun at{" "}
            <a href="https://girardot.co.uk/">Girardot Design,</a> where I had
            the opportunity to work with prestigious brands like Guinness Global
            Investors, Goldman Sachs, and Elmwood Warm Spaces. I was involved in
            the rebrand of the Royal Opera House and experimented with new ways
            of telling stories through branding and advertising. I'm proud of
            the work we've done and feel cuffed to have worked with such
            distinguished clients.{" "}
            <i class="fa fa-briefcase" aria-hidden="true"></i>
          </p>
          {/* Middel east */}
          <p>
            In 2021, I noticed a significant reduction in the Western media's
            coverage of the Middle East. This inspired me to pursue my
            dissertation,{" "}
            <span
              onClick={e =>
                handleLinkClick(
                  e,
                  {
                    src: ba1Image,
                    alt: "All three books for Iraq Afghanistan and Syria",
                  },
                  {
                    src: ba2Image,
                    alt: "All three books standing up showing the horizontal scale",
                  },
                  {
                    src: ba3Image,
                    alt: "An open double page spread showing the contents of dots",
                  },
                  {
                    src: ba4Image,
                    alt: "A close up of the three scroles of dots",
                  },
                  { src: ba5Image, alt: "A wide angel of the scroles" },
                  { src: ba6Image, alt: "A wide angle of the exhibit" }
                )
              }
              onKeyPress={e =>
                handleLinkClick(
                  e,
                  {
                    src: ba1Image,
                    alt: "All three books for Iraq Afghanistan and Syria",
                  },
                  {
                    src: ba2Image,
                    alt: "All three books standing up showing the horizontal scale",
                  },
                  {
                    src: ba3Image,
                    alt: "An open double page spread showing the contents of dots",
                  },
                  {
                    src: ba4Image,
                    alt: "A close up of the three scroles of dots",
                  },
                  { src: ba5Image, alt: "A wide angel of the scroles" },
                  { src: ba6Image, alt: "A wide angle of the exhibit" }
                )
              }
              role="button"
              tabIndex="0"
              style={{
                cursor: "pointer",
                color: "white",
                textDecoration: "underline",
              }}
            >
              "A New Way of Seeing: Visualizing the Middle East Conflict"
            </span>
            In this work, I explore how information design can help us
            understand the human and political scale of the region's destruction
            and displacement. <i class="fa fa-circle" aria-hidden="true"></i>
          </p>
          {/* IOT */}
          <p>
            During 2020, Jeremy Rifkin's writings on the third industrial
            revolution fueled me with a rich understanding of the dynamic
            social, economic, and technological shifts underway. His overarching
            narrative offers exciting insights but is also a bit overwhelming.
            To help make his ideas more accessible, I created{" "}
            <span
              onClick={e =>
                handleLinkClick(
                  e,
                  {
                    src: IoTVid01,
                    alt: "Main video content for the IoT project",
                  },
                  {
                    src: IoTVid02,
                    alt: "Demo of a user utilizing the platform",
                  }
                )
              }
              style={{
                cursor: "pointer",
                color: "white",
                textDecoration: "underline",
              }}
              role="button"
              tabIndex="0"
            >
              "The Rifkin Lens: A Glimpse into What's Next"{" "}
            </span>{" "}
            an interactive museum experience that families can explore from
            home. This allows them to engage with Rifkin's ideas and consider
            the implications for our future.{" "}
            <i class="fa fa-laptop" aria-hidden="true"></i>
          </p>
          {/* TLF */}
          <p>
            Back in 2019 while at Central Saint Martins, I collaborated with
            Transport for London on a project to promote cycling in the city. My
            proposal was{" "}
            <span
              onClick={e =>
                handleLinkClick(
                  e,
                  { src: TFL06, alt: "Main wideo demo of project" },
                  { src: TFL01, alt: "3D Packaging mockup" },
                  { src: TFL02, alt: "Oyster card mockup" },
                  { src: TFL03, alt: "Phone demo of application" },
                  { src: TFL04, alt: "Second phone demo of application" }
                )
              }
              onKeyPress={e => {
                if (e.key === "Enter") {
                  handleLinkClick(
                    e,
                    { src: TFL06, alt: "Main wideo demo of project" },
                    { src: TFL01, alt: "3D Packaging mockup" },
                    { src: TFL02, alt: "Oyster card mockup" },
                    { src: TFL03, alt: "Phone demo of application" },
                    { src: TFL04, alt: "Second phone demo of application" }
                  )
                }
              }}
              role="button"
              tabIndex="0"
              style={{
                cursor: "pointer",
                color: "white",
                textDecoration: "underline",
              }}
            >
              "Explore Your City: Your Two-Hour Starter Kit"
            </span>{" "}
            an interactive museum experience that allows students to use a
            two-hour access card for free use of Santander Cycles. This helps
            students get to know the city and make connections with their new
            flatmates. <i class="fa fa-bicycle" aria-hidden="true"></i>
          </p>

          <h2 className="subhead">Other Work.</h2>
          <p>
            Writing Work -{" "}
            <i>
              I have also started a new writing archive. You can expect my
              insights on the systems I’m currently studying, such as Climate,
              Water, Sustainability, and everything in between. My goal is to
              cut through the complex and provide insightful introductions
              <a href="https://written.jack-robertson.co.uk">
                {" "}
                which you can acsess by clicking here.
              </a>
            </i>
          </p>

          <h2 className="subhead">Other collaborators.</h2>
          {/* All */}
          <p>
            ICEAwards -{" "}
            <i>
              The ICEAwards UK honor the best in-house corporate event planners
              and celebrate their passion for excellence.{" "}
              <a href="https://ice-hub.biz/"> Click here.</a>
            </i>{" "}
            <br></br>
            <br></br>
            Capgemini -{" "}
            <i>
              University Week brings together the best in the corporate training
              industry to collaborate and learn from each other.{" "}
              <a href="https://ceeds.capgemini.com/index.html"> Click here.</a>
            </i>
            <br></br>
            <br></br>
            NHS Integrated Care System Cornwall -{" "}
            <i>
              Shared resources, equal access, and community partnership - a
              blueprint for health equity.{" "}
              <a href="https://cios.icb.nhs.uk/ics/"> Click here.</a>
            </i>
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

            <div></div>
          </div>

          <EmissionCalculator />

          <img src={BottomLogo} alt="Company Logo" className="logo" />
        </div>
      </div>
    </>
  )
}

export default HomeTop
