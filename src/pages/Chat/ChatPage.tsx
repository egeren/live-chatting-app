import React, { useState, useEffect, useContext } from 'react';
import Contacts from 'views/ChatPage/Contacts';
import ChatView from 'views/ChatPage/ChatView';
import RoomDetails from 'views/ChatPage/RoomDetails';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Popup } from 'components';
import { CreateRoomPopup } from 'views/ChatPage/PopupViews';
import { popupActions, roomsDataActions } from 'store';
import { SocketContext } from 'App';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';

function ChatPage() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);
  const roomDetailsBarStore = useAppSelector((state) => state.roomDetailsBar);
  const popupStore = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket?.emit('request-server-data');
    socket?.on(
      'server-data',
      (data: { users: any; messages: any; rooms: IRoomDataStore[] }) => {
        dispatch(roomsDataActions.setRoomsData(data.rooms));
      }
    );
  }, []);

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
      {popupStore.isOpen && <Popup content={popupStore.popupElement} />}
    </div>
  );
}

export default ChatPage;
