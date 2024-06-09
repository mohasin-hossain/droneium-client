import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import DroneContainer from '../../Shared/Drones/DroneContainer/DroneContainer';
import ReviewContainer from '../Reviews/ReviewContainer/ReviewContainer';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner/Banner';
import FAQ from '../FAQ/FAQ';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navigation />
      <Banner />
      <DroneContainer home={true} />
      <ReviewContainer />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
