import React from 'react';
import loadingImage from './loading.svg';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-50">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <img
          src={loadingImage}
          alt="Loading"
          width={120}
          height={120}
          className="animate-spin-slow"
        />
        <p className="mt-4 text-gray-700 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
