import React, { useState, useEffect } from 'react';
import Contacts from 'views/ChatPage/Contacts';
import ChatView from 'views/ChatPage/ChatView';
import RoomDetails from 'views/ChatPage/RoomDetails';
import { useAppSelector } from 'hooks';

function ChatPage() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);
  const roomDetailsBarStore = useAppSelector((state) => state.roomDetailsBar);
  return (
    <div className="chat-wrapper w-full h-full flex flex-auto md:p-6 rounded-xl">
      <div className="relative flex w-full h-full bg-primary-100 md:rounded-xl overflow-hidden lg:p-0 md:pl-[80px] sm:pl-[70px] pl-[50px] lg:pr-0 md:pr-[70px] sm:pr-[70px] pr-[40px]">
        <Contacts />
        <ChatView />
        <RoomDetails />
        {contactsBarStore.expanded ||
          (roomDetailsBarStore.expanded && (
            <div className="absolute w-full h-full inset-0  bg-black bg-opacity-80 z-40" />
          ))}
      </div>
    </div>
  );
}

export default ChatPage;
