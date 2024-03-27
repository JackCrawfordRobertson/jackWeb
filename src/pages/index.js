// Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Components
import Seo from "../components/seo";
import HomeTop from "../components/HomeTop/Home";

// Styles
import "../styles/global.css";

const Index = () => {
  return (
    <main>
      <Helmet>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jack-robertson.co.uk/" />
      </Helmet>
      <Seo
        title="Home"
        description="Exploring how storytelling and narratives can unlock insights into complex systems like economics and politics."
      />
      <HomeTop />
    </main>
  );
};

export default Index;
