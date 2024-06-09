import {
  Avatar,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import LoginAnimation from '../../Login/LoginAnimation/LoginAnimation';

const DashboardHome = () => {
  const { user, admin } = useAuth();
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 1,
        pt: 4,
        maxHeight: '100vh',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        style={{
          textAlign: 'center',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        Welcome To Dashboard
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <LoginAnimation />
        </Grid>
        <Grid item xs={12} md={6}>
          <Avatar
            alt={user.displayName}
            src={user.photoURL}
            style={{
              width: 96,
              height: 96,
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
          ></Avatar>
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
                {user.displayName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Role: {admin ? 'Admin' : 'User'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHome;
