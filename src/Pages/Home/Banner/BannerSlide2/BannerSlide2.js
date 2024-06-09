import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import video from '../../../../video/drone-v3.mp4';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';
import TextLoop from 'react-text-loop';

const BannerSlide2 = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          minHeight: '90vh',
          objectFit: 'cover',
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',

          width: '90%',
          height: '50%',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            m: 3,
            ml: -8,
            fontWeight: '500',
            lineHeight: 1.2,
          }}
          center
          variant="h3"
        >
          <TextLoop>
            <Typist>
              BOOST YOUR
              <br /> SOCIAL MEDIA
            </Typist>
            <Typist>
              BOOST YOUR
              <br /> SOCIAL MEDIA
            </Typist>
          </TextLoop>
        </Typography>
        <Typography center variant="body1" sx={{ my: 8 }}>
          Perfect Drone for Extreme Aerial Photography and Video
        </Typography>
        <NavLink
          to="/explore"
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Button variant="contained" size="large">
            EXPLORE DRONES
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default BannerSlide2;
