import React, { useState, useEffect } from 'react';
import { Message, TextInput } from 'components';
import { IoSend } from 'react-icons/io5';

function ChatScreen() {
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
          className="w-full lg:h-16 md:h-12 h-12 px-3 bg-primary-300 text-white md:text-xl text-lg rounded-md"
          placeholder="Send message to Global Chat Room 1"
          icon={<IoSend />}
          iconPosition="right"
          iconClass="text-white cursor-pointer"
        />
      </div>
    </>
  );
}

export default ChatScreen;
