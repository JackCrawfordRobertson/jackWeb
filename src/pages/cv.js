import React from "react";
import { Helmet } from "react-helmet";

const CVPage = () => {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Helmet>
        <title>CV - Jack Robertson</title>
      </Helmet>
      {/* Ensure the PDF path is correct and publicly accessible */}
      <embed
        src="/cv.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default CVPage;
