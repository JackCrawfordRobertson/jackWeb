import React, { useEffect } from 'react';

function EmissionCalculator() {
  useEffect(() => {
    // Load the carbon badge script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js';
    script.defer = true;
    document.getElementById('wcb').appendChild(script);
  }, []);

  return <div id="wcb" class="carbonbadge wcb-d"></div>;
}

export default EmissionCalculator;
