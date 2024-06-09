import {
  Card,
  Container,
  Grid,
  Typography,
  CardContent,
  Button,
} from '@mui/material';
import React from 'react';
import Lottie from 'react-lottie';
import payment from '../../../../animations/empty.json';
import { Link } from 'react-router-dom';

const EmptyPay = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: payment,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 1,
      }}
    >
      {/* Order Info Card */}

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              textAlign: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                You Don't Have Nothing To Pay.
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Purchase First
              </Typography>
              <Link to="/explore" style={{ textDecoration: 'none' }}>
                <Button variant="contained">Explore All Drones</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmptyPay;
