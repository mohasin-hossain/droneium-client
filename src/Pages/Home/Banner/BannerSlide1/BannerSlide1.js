import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Lottie from 'react-lottie';
import homeBanner from '../../../../animations/homeBanner.json';
import Fade from 'react-reveal/Fade';

const BannerSlide1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: homeBanner,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
        </Grid>
        <Grid xs={12} md={6}>
          <Fade right>
            <Typography sx={{ mt: 3, lineHeight: 1.4 }} center variant="h2">
              MANY GREAT WAY TO USE DRONES
            </Typography>
            <Typography center variant="body1" sx={{ mb: 3 }}>
              Get your hands on the most advanced Drone
            </Typography>
            <NavLink
              to="/explore"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Button variant="contained" size="large">
                EXPLORE DRONES
              </Button>
            </NavLink>
          </Fade>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerSlide1;
