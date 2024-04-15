import React from "react";
import { Helmet } from "react-helmet";

const CVPage = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden", backgroundColor: 'white' }}>
      <Helmet>
        <title>CV - Jack Robertson</title>
      </Helmet>
      {/* Using an img tag to display the image */}
      <img
        src="/cv.png"  // Make sure this path is correct based on your static directory configuration
        style={{ width: "100vw", height: "auto" }}
        alt="CV of Jack Robertson"
      />
    </div>
  );
};

export default CVPage;
