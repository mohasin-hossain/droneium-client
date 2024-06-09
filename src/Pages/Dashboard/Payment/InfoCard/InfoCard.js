import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const InfoCard = ({ orderInfo }) => {
  const { name, email, phone, DroneName, price, address, droneImg } = orderInfo;
  return (
    <Box
      sx={{
        my: 2,
        p: 2,
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
        transitionDuration: '0.4s',
        borderRadius: '10px',
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-in-out',
        '&:hover, &:focus': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Typography component="div" variant="h4" align="center" sx={{ my: 2 }}>
        Order Details
      </Typography>
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item xs={12} md={6}>
          {/* Shipping Info */}
          <Typography component="div" variant="h6">
            Shipping Address
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            {name}
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            {phone}
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            {email}
          </Typography>

          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
          >
            {address}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Product Info */}

          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box>
              <Typography component="div" variant="h6">
                Product Details
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                {DroneName}
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                Price: ${price}
              </Typography>

              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                Shipping Cost: $20
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                Sub-total: ${parseFloat(price) + 20}
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: '40%', objectFit: 'contain', p: 2 }}
              src={droneImg}
              alt={name}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InfoCard;
