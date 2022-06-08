import { useAppSelector } from 'hooks';
import React from 'react';
import { IoSend } from 'react-icons/io5';
import ChatScreen from './ChatScreen';
import EmptyScreen from './EmptyScreen';
import WelcomeScreen from './WelcomeScreen';

interface ChatViewProps {
  activeChatId: string | null | undefined;
}

function ChatView() {
  const chatUiData = useAppSelector((state) => state.chatScreenData);
  const roomsData = useAppSelector((state) => state.roomsData);
  let chat;
  if (chatUiData.selectedChat) {
    const room = roomsData.find((room) => {
      return room.id === chatUiData.selectedChat?.id;
    });
    if ((room && room.roomUsers.length > 1) || room?.isGlobal) {
      chat = <ChatScreen chatRoom={room} />;
    } else {
      chat = <EmptyScreen />;
    }
  } else {
    chat = <WelcomeScreen />;
  }

  return (
    <div className="flex flex-col justify-end flex-1 px-4 pt-3">{chat}</div>
  );
}

export default ChatView;
