import React, { useState, useEffect } from 'react';
import Contacts from 'views/ChatPage/Contacts';
import ChatView from 'views/ChatView';

function ChatPage() {
  return (
    <div className="chat-wrapper w-full h-full flex flex-auto md:p-6 rounded-xl">
      <div className="relative flex w-full h-full bg-primary-100 md:rounded-xl overflow-hidden lg:p-0 md:pl-[80px] sm:pl-[70px] pl-[50px]">
        <Contacts />
        <ChatView />
      </div>
    </div>
  );
}

export default ChatPage;
