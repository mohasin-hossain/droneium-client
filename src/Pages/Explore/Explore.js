import React from 'react';
import DroneContainer from '../Shared/Drones/DroneContainer/DroneContainer';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Explore = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />
      <DroneContainer />
      <Footer />
    </div>
  );
};

export default Explore;
