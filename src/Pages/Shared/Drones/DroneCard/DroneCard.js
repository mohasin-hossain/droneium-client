import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DroneCard = ({ drone }) => {
  const { _id, name, img, description, price } = drone;
  return (
    <Grid item xs={12} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
          transitionDuration: '0.4s',
          transitionProperty: 'transform',
          transitionTimingFunction: 'ease-in-out',
          '&:hover, &:focus': {
            transform: 'scale(1.03)',
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt={name}
          sx={{ objectFit: 'contain', p: 1 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4">${price}</Typography>
          <Link style={{ textDecoration: 'none' }} to={`/drones/${_id}`}>
            <Button variant="contained" size="small">
              Buy Now
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DroneCard;
