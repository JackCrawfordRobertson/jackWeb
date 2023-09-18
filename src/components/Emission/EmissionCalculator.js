import React, { useState, useEffect } from 'react';

function CarbonFooter() {
  const [carbonData, setCarbonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarbonData = async () => {
      try {
        const response = await fetch('https://API_ENDPOINT_HERE', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY_HERE',
          },
          body: JSON.stringify({
            url: window.location.href, // Assuming you want to get data for the current website
          }),
        });

        const data = await response.json();
        if (data.error) {
          setError(data.error);
        } else {
          setCarbonData(data); // Adjust the data path based on the API response structure
        }
      } catch (err) {
        console.error('Error:', err);
        setError('An error occurred. Please try again.');
      }
    };

    fetchCarbonData();
  }, []);

  return (
    <footer>
      {carbonData && (
        <p>
          This load of the website caused an estimated {carbonData.carbon_g} grams of CO2 emissions.
          {/* Adjust the data path based on the API response structure */}
        </p>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </footer>
  );
}

export default CarbonFooter;
