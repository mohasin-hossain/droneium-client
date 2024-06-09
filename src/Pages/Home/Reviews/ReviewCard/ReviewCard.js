import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Rating } from '@mui/material';
import bg from '../../../../images/qoute.jpg';

export default function ReviewCard({ review }) {
  return (
    <Card
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',

        m: 2,
        boxShadow: '0 0 10px rgba(0,0,0,0.6)',
        transitionDuration: '0.4s',
        transitionProperty: 'transform',
        transitionTimingFunction: 'ease-in-out',
        '&:hover, &:focus': {
          transform: 'scale(1.03)',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
        <CardContent>
          <Typography component="div" variant="h6">
            <i
              className="fas fa-quote-left"
              style={{
                fontSize: '48px',
                marginRight: '5px',
                color: '#1a76d2',
                width: '100%',
              }}
            ></i>
            {review.review}
            <i
              className="fas fa-quote-right"
              style={{
                marginLeft: '5px',
                color: '#1a76d2',
              }}
            ></i>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexGrow: 1,
              my: 1,
            }}
          >
            <Box sx={{ display: 'flex', my: 1, alignItems: 'center' }}>
              <Avatar
                alt={review.name}
                src={review.img}
                style={{
                  width: 48,
                  height: 48,
                  marginRight: '5px',
                }}
              ></Avatar>
              <Typography variant="body" color="text.secondary">
                {review.name}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: '#B6E6FA',
                boxShadow: '0 0 20px rgba(0,0,0,0.6)',
                padding: '5px 10px',
                borderRadius: '10px',
              }}
            >
              <Rating
                name="read-only"
                value={parseFloat(review.rating)}
                readOnly
              />
            </Box>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
