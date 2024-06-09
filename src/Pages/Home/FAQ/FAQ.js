import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from 'react-lottie';
import faq from '../../../animations/faq.json';

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: faq,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={7} sx={{ p: 2 }}>
          <Box sx={{ ml: 3 }}>
            <Typography center variant="h6">
              FREQUENTLY ASKED QUESTIONS
            </Typography>
            <Typography sx={{ mb: 3, lineHeight: 1.2 }} center variant="h3">
              What Are The Most Common Questions Customers Ask?
            </Typography>
          </Box>
          {/* Accordion */}
          <Box sx={{ ml: 3 }}>
            <Accordion
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Order Place
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  How do I place an Order?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Simply add all the products to your shopping cart and click on
                  the checkout button. From there, review your order and choose
                  a shipping method. Continue to the next page and choose a
                  payment method. Once you place your order and receive a
                  confirmation email from Verydrone, you are all finished!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Account
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Do I need an account to place an order?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No you do not. You can checkout as a guest but you will not
                  have the ability to track your order nor view your previous
                  orders with Verydrone.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Track Order
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  How Do I Track My Order?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can track your order by either logging into your account
                  and viewing your order or by tracking it here.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  Cancel Or Change Order
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  How Can I Cancel Or Change My Order?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you would like to cancel or change your order, you can do
                  so by contacting us.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} sx={{ p: 2 }}>
          <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
