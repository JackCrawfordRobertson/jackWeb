// Dependencies
import * as React from "react";
import { Link } from 'gatsby'; // Keep this if you're using Gatsby's Link component in your project

// Components
import Seo from "../components/seo";
import HomeTop from "../components/HomeTop/HomeTop";

// Styles
import "../styles/global.css";

const Index = () => {
  return (
    <div>
      <Seo 
        title="Home" 
        description="Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics."
      />
      <HomeTop />
    </div>
  );
};

export default Index;
