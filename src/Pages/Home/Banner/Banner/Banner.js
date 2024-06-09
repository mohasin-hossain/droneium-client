import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import './Banner.css';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import BannerSlide1 from '../BannerSlide1/BannerSlide1';
import BannerSlide2 from '../BannerSlide2/BannerSlide2';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        style={{ backgroundColor: 'white', width: '100%' }}
      >
        <SwiperSlide>
          <BannerSlide1 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundImage: 'none' }}>
          <BannerSlide2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
