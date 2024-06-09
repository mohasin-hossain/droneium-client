import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import DroneCard from "../DroneCard/DroneCard";
import Fade from "react-reveal/Fade";
import Loading from "../../Loading/Loading";
import { NavLink } from "react-router-dom";
import DroneBanner from "../../DroneBanner/DroneBanner";

const DroneContainer = ({ home }) => {
  const [drones, setDrones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let displayDrones = [...drones];
  if (home) {
    displayDrones = drones.slice(0, 6);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("https://droneium-api.onrender.com/drones")
      .then((res) => res.json())
      .then((data) => {
        setDrones(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <DroneBanner />
      <Container sx={{ my: 2 }}>
        <Fade left>
          <Grid container alignItems="center" spacing={2}>
            {displayDrones.map((drone) => (
              <DroneCard key={drone._id} drone={drone} />
            ))}
          </Grid>
        </Fade>
        {home && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              transitionDuration: "0.4s",
              transitionProperty: "transform",
              transitionTimingFunction: "ease-in-out",
              "&:hover, &:focus": {
                transform: "scale(1.03)",
              },
            }}
          >
            <NavLink
              to="/explore"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Button variant="contained" size="large">
                EXPLORE ALL DRONES
              </Button>
            </NavLink>
          </Box>
        )}
      </Container>
    </>
  );
};

export default DroneContainer;
