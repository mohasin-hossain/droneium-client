import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import animation from '../../animations/notFound.json';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Container maxWidth={false} style={{}}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              textAlign: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                You may entered wrong URL
              </Typography>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button sx={{ my: 1 }} fullWidth variant="contained">
                  Go To Home Page
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NotFound;
