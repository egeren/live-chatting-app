import React, { useState, useEffect } from 'react';
import { ChatCategory, Container } from './styled';
import { Chat } from 'components';
import { IoAdd } from 'react-icons/io5';
import { ContactBarProps } from 'helpers/interfaces/store';

function ChatRooms(props: ContactBarProps) {
  const { expanded } = props;

  const chatRoom1 = {
    id: '1',
    name: 'Global Room 1',
    msg: 'Jane: yes im working on it',
  };

  const chatRoom2 = {
    id: '2',
    name: 'React.js Dev Team',
    msg: 'David: yes, we should refactor that',
  };
  return (
    <Container>
      <div className="flex flex-col">
        <ChatCategory {...props}>Global Chat Rooms</ChatCategory>

        <Chat {...props} chatRoom={chatRoom1} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between pr-3">
          <ChatCategory {...props}>Private Chat Rooms</ChatCategory>
          {expanded && (
            <IoAdd className="text-white text-3xl p-1 cursor-pointer hover:bg-[#2e2e2e] active:bg-[#2e2e2e] rounded-full" />
          )}
        </div>

        <Chat {...props} chatRoom={chatRoom2} />
      </div>
    </Container>
  );
}

export default ChatRooms;
