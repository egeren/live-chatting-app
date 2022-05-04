import { Message, TextInput } from 'components';
import React, { useState, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import Lottie from 'react-lottie';
import * as animationData from './women-message.json';

interface ChatViewProps {
  activeChatId: string | null | undefined;
}

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function ChatView() {
  return (
    <div className="flex flex-col justify-end flex-1 px-4 pt-3">
      <ChatScreen />
    </div>
  );
}

const ChatScreen = () => {
  return (
    <>
      <div className="block flex-col justify-end h-full w-full pb-2 overflow-y-scroll">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="flex py-2">
        <p className="font-primary text-white">
          <span className="font-bold">Jane</span> is typing...
        </p>
      </div>
      <div className="flex bg-red pb-4">
        <TextInput
          className="w-full h-16 px-3 bg-primary-300 text-white text-xl rounded-md"
          placeholder="Send message to Global Chat Room 1"
          icon={<IoSend />}
          iconPosition="right"
          iconClass="text-white cursor-pointer"
        />
      </div>
    </>
  );
};

const WelcomeScreen = () => {
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
};

export default ChatView;
