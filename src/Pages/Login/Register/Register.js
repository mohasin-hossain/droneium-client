import { Container, Typography, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LoginAnimation from '../LoginAnimation/LoginAnimation';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegistrationSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert('Your password did not match');
      return;
    }
    registerUser(
      loginData.email,
      loginData.password,
      history,
      loginData.name,
      location
    );
    e.preventDefault();
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 1,
        py: 8,
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
            Please Register
          </Typography>
          {/* Register With Email and Password */}
          {!isLoading && (
            <form onSubmit={handleRegistrationSubmit}>
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 1 }}
                label="ReType Your Password"
                type="password"
                name="confirmPassword"
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                sx={{ width: '75%', m: 1, my: 4 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </form>
          )}
          {isLoading && <Loading />}
          {user?.email && (
            <Alert severity="success">User Created successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
          {/* Registration */}
          <NavLink style={{ color: 'black' }} to="/login">
            <Typography variant="body">Already Have an Account?</Typography>
          </NavLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <LoginAnimation />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
