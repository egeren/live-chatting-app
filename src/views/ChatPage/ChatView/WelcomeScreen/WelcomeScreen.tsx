import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../women-message.json';

function WelcomeScreen() {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="flex xl:w-[400px] lg:w-[300px] md:w-[280px] sm:w-[250px] w-[200px] z-0">
        <Lottie
          options={lottieOptions}
          isClickToPauseDisabled
          width="100%"
          style={{ zIndex: -50 }}
        />
      </div>
      <div className="flex">
        <h1 className="font-primary xl:text-6xl lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-white text-center">
          Start Chatting Now
        </h1>
      </div>
      <div className="flex pt-4 pb-28 px-10">
        <p className="font-primary xl:text-xl lg:text-lg md:text-sm sm:text-sm text-xs text-white text-center">
          Join a global chatting room, create chat rooms with other users and
          chat privately.
        </p>
      </div>
    </div>
  );
}

export default WelcomeScreen;
