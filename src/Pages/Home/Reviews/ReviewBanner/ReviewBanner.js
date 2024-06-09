import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Lottie from 'react-lottie';
import reviewBanner from '../../../../animations/review.json';
import Fade from 'react-reveal/Fade';

const ReviewBanner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reviewBanner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container maxWidth={false} sx={{ mx: 2, mb: 3 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
        </Grid>
        <Grid xs={12} md={6}>
          <Fade right>
            <Typography center variant="h6">
              OUR CUSTOMER STORIES
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.2 }} center variant="h2">
              We Love Our Clients, And They Love Us
            </Typography>

            <NavLink
              to="/explore"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button variant="contained" size="large">
                EXPLORE ALL DRONES
              </Button>
            </NavLink>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReviewBanner;
