import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Grid,
  Box,
} from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import LoginAnimation from '../LoginAnimation/LoginAnimation';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        my: 1,
        py: 8,
        maxHeight: '100vh',
        borderRadius: '15px',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <LoginAnimation />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ textAlign: 'center' }} variant="h5" gutterBottom>
            Please Login
          </Typography>
          {/* Login With Email and Password */}
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onSubmit={handleLoginSubmit}
          >
            <TextField
              sx={{ width: '100%', m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: '100%', m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />

            <Button
              sx={{ width: '75%', m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>

            {isLoading && <Loading />}
            {user?.email && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          {/* Login With other */}
          <Box sx={{ mt: 8 }}>
            <Typography variant="body">Or Login with</Typography>
            <Button onClick={handleGoogleSignIn}>
              <Typography
                variant="body"
                sx={{
                  mx: 1,
                  color: 'white',
                  backgroundColor: 'red',
                  p: 1,
                  borderRadius: '10px',
                }}
              >
                <i style={{ fontSize: '24px' }} className="fab fa-google"></i>{' '}
              </Typography>
            </Button>
          </Box>
          {/* Registration */}
          <NavLink style={{ color: 'black' }} to="/register">
            <Typography sx={{ mt: 8 }} variant="body">
              Create an Account
            </Typography>
          </NavLink>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
