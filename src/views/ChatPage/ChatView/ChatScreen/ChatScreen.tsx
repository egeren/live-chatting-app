import React, { useState, useEffect, useContext, useRef } from 'react';
import { Message, TextInput } from 'components';
import { IoSend } from 'react-icons/io5';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';
import { SocketContext } from 'App';
import { useAppSelector } from 'hooks';
import Typers from './Children/Typers';

export interface ChatScreenProps {
  chatRoom: IRoomDataStore;
}

function ChatScreen(props: ChatScreenProps) {
  const { chatRoom } = props;
  const [lastTypingSend, setLastTypingSend] = useState<Date>(new Date(0));
  const socket = useContext(SocketContext);
  const userData = useAppSelector((state) => state.userData);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState<string>('');

  const handleSendMessage = (value: string) => {
    if (value !== '') {
      socket?.emit('send-chat-message', {
        roomId: chatRoom.id,
        message: value,
      });
      setLastTypingSend(new Date(0));
    }
    setMessage('');
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (lastTypingSend.getTime() + 5000 < new Date().getTime()) {
      setLastTypingSend(new Date());
      socket?.emit('typing', {
        userId: userData.id,
        roomId: chatRoom.id,
        username: userData.username,
      });
    }
  };

  useEffect(() => {
    if (chatContainerRef && chatContainerRef.current) {
      chatContainerRef.current.scrollTo(
        0,
        chatContainerRef.current?.scrollHeight
      );
    }
  }, [chatRoom.roomMessages]);

  return (
    <>
      <div
        ref={chatContainerRef}
        className="flex-col justify-end h-full w-full pb-2 overflow-y-scroll"
      >
        {chatRoom.roomMessages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>
      <div className="flex py-2 min-h-[40px]">
        <Typers chatRoom={chatRoom} />
      </div>
      <div className="flex bg-red pb-4">
        <TextInput
          className="w-full lg:h-16 md:h-12 h-12 px-3 bg-primary-300 text-white md:text-xl text-lg rounded-md"
          placeholder="Send message to Global Chat Room 1"
          icon={<IoSend />}
          iconPosition="right"
          iconClass="text-white cursor-pointer"
          value={message}
          onSend={handleSendMessage}
          onChange={handleTyping}
        />
      </div>
    </>
  );
}

export default ChatScreen;
