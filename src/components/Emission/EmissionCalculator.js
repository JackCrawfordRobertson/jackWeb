import React from 'react';
import './badge-styles.css';

function EmissionCalculator() {
  return (
    <div className="carbon-button">
      <div className="carbon-text">
        <a href="https://www.websitecarbon.com/website/jack-robertson-co-uk/" target="_blank" rel="noopener noreferrer">
          0.10g of CO2/view
        </a>
        <a href="https://www.websitecarbon.com/" target="_blank" rel="noopener noreferrer" className="website-carbon">
          Website Carbon
        </a>
      </div>
      <div className="carbon-rating">
        <p>Cleaner than 90% of pages tested</p>
      </div>
    </div>
  );
}


export default EmissionCalculator;
