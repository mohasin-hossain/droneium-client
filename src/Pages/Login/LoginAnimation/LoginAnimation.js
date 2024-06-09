import React from 'react';
import Lottie from 'react-lottie';
import animation from '../../../animations/dashboard.json';

const LoginAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'auto'} width={'auto'} />
    </div>
  );
};

export default LoginAnimation;
