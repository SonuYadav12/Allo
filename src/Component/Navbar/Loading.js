import React from 'react';
import loadingImage from './loading.svg' 

const Loading = () => {
  return (
    <div className="w-full h-full flex  flex-col items-center justify-center">
      <img
        src={loadingImage}
        alt="Loading"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};

export default Loading;
