import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import Lottie from 'react-lottie';
import drone from '../../../animations/droneBanner.json';
import Fade from 'react-reveal/Fade';
import bg from '../../../images/droneBanner.jpg';

const DroneBanner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: drone,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        width: '100%',
      }}
    >
      <Container
        sx={{
          mx: 3,
        }}
        maxWidth={false}
      >
        <Grid
          container
          justify="center"
          spacing={2}
          columns={{ xs: 12, md: 12 }}
          sx={{ alignItems: 'center' }}
        >
          <Grid item xs={12} md={6}>
            <Fade left>
              <Typography center variant="h6" sx={{ pt: 3 }}>
                THE WORLDS'
              </Typography>
              <Typography sx={{ mb: 1, lineHeight: 1.2 }} center variant="h2">
                Most Versatile Drone Collection
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DroneBanner;
