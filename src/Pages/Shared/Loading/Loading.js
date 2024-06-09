import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../../animations/loading.json';

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={'auto'} width={400} />
    </div>
  );
};

export default Loading;
