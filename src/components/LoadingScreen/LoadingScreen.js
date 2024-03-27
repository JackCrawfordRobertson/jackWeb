import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./LoadingScreen.css";
import blueLogo from "../../images/Blue_Logo.svg";

const LoadingScreen = () => {
  const logoRef = useRef(null);
  const loadingScreenRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.75, ease: "back.out(1.7)" }
    });
  
    tl.fromTo(logoRef.current, 
      { y: -100, autoAlpha: 0, scale: 0.2 }, // Starting from a smaller size
      { y: 40, autoAlpha: 1, scale: 1 }) // Scale up to original size, adjust this to make it smaller if needed
      .to(logoRef.current, 
        { rotation: 360, scale: 1, duration: 1.5 }) // Keep at original size
      .to(logoRef.current, 
        { y: 20, repeat: 1, yoyo: true, ease: "power1.inOut" }, "<") // Small bounce effect
        .to(loadingScreenRef.current, 
          { autoAlpha: 0, delay: 0.1 }, ">1"); // Reduced delay before fade-out starts
        
  }, []);
  

  return (
    <div className="loadingScreen" ref={loadingScreenRef}>
      <img src={blueLogo} alt="Logo" className="loadingIcon" ref={logoRef} />
    </div>
  );
};

export default LoadingScreen;
