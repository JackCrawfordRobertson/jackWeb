//Dependencies
import * as React from "react"
import { BrowserRouter } from 'react-router-dom';

//Components
import Seo from "../components/seo"
import HomeTop from "../components/HomeTop/HomeTop"

//Styles
import "../styles/global.css"

const Index = () => {
  return (
    <BrowserRouter>
      <div>
        <Seo 
          title="Home" 
          description="Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics."
        />
        <HomeTop/>
      </div>
    </BrowserRouter>
  )
}

export default Index
