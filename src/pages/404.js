import * as React from "react";
import { Link } from 'gatsby';
import Button from '@mui/material/Button';
import Seo from "../components/seo";

const NotFoundPage = () => (
  <>
    <Seo title="404: Not Found" />
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.message}>
        Let’s not get stuck up on it, the average human lifespan is absurdly,
        insultingly brief. Assuming you live to be eighty, you have just over
        four thousand weeks. Nobody needs telling there isn't enough time.
        <b>- 4000 Weeks, Roberts Bosman</b>
      </p>
      <Link to="/" style={styles.link}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fff',
            color: '#3496d3',
            '&:hover': {
              backgroundColor: '#f6f6f6',
            },
            textDecoration: 'none'
          }}
        >
          Take Me Back!
        </Button>
      </Link>
    </div>
  </>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3496d3',
    textAlign: 'center',
    padding: '0 20px',
    boxSizing: 'border-box'
  },
  heading: {
    fontSize: '6rem',
    margin: '0',
    color: '#fff'
  },
  
  message: {
    fontSize: '1.2rem',
    margin: '20px 0',
    color: '#fff',
    maxWidth: '600px',
    lineHeight: '1.6'
  },
  link: {
    textDecoration: 'none'
  }
};

export default NotFoundPage;
