import React from 'react';
import Drawer from '@mui/material/Drawer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './WorkCard.css';

const theme = createTheme({
  transitions: {
    easing: {
      easeIn: 'cubic-bezier(0.4, 0, 0.2, 1)', // This will be used for entering transition
      easeOut: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // This will be used for exiting transition
    },
  },
});

const WorkCard = ({ mediaUrls, onClose, isOpen }) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        transitionDuration={{ enter: 1200, exit: 1200 }}
        SlideProps={{
          style: {
            transitionTimingFunction: isOpen ? theme.transitions.easing.easeIn : theme.transitions.easing.easeOut,
          },
        }}
        PaperProps={{
          style: {
            width: '100vw',
            padding: 0,
            backgroundColor: 'white',
          },
        }}
      >
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <div className="media-container">
          {mediaUrls?.[0] && (
            <div className="media-item-0">
              {mediaUrls[0].endsWith('.mp4') ? (
                <video autoPlay loop muted className="media-item">
                  <source src={mediaUrls[0]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={mediaUrls[0]} alt="Media" className="media-item" />
              )}
            </div>
          )}

          <div className="grid-container">
            {mediaUrls?.slice(1).map((url, index) => (
              <div key={index} className="media-item">
                {url.endsWith('.mp4') ? (
                  <video autoPlay loop muted className="media-item">
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={url} alt={`Media ${index + 2}`} className="media-item" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  );
};

export default WorkCard;
