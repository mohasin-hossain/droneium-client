import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoCard = ({ drone }) => {
  const { name, price, description, img } = drone;
  return (
    <Card
      sx={{
        display: 'flex',
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
        transitionDuration: '0.4s',
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-in-out',
        '&:hover, &:focus': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography component="div" variant="h5">
            ${price}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: '40%', objectFit: 'contain' }}
        image={img}
        alt={name}
      />
    </Card>
  );
};

export default InfoCard;
