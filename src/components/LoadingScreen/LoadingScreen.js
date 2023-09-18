import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const container = animationContainerRef.current;

    const animation = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: process.env.PUBLIC_URL + '/Main-Logo-Animation.lottie',
    });

    // Delay hiding the loading screen by 3 seconds (or your desired time)
    const hideTimeout = setTimeout(() => {
      animation.goToAndStop(0); // Go to the first frame
      animation.setSpeed(1); // Set animation speed
      animation.playSegments([0, animation.totalFrames], true); // Play the entire animation once
      animation.addEventListener('complete', () => {
        // Animation is complete, hide the loading screen
        container.style.display = 'none';
      });
    }, 3000);

    return () => {
      clearTimeout(hideTimeout);
      animation.destroy();
    };
  }, []);

  return (
    <div className="loading-screen">
      <div
        ref={animationContainerRef}
        id="lottie-animation"
        style={{ width: 200, height: 200 }}
      ></div>
    </div>
  );
};

export default LoadingScreen;
