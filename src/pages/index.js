//Dependencies
import * as React from "react"

//Components
import Seo from "../components/seo"
import HomeTop from "../components/HomeTop/HomeTop"

//Styles
import "../styles/global.css"

const Index = () => {
  return (
    <div>
      <Seo 
        title="Home" 
        description="Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics."
      />
      <HomeTop/>
    </div>
  )
}

export default Index
