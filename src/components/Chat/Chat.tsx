import { ChatProps } from 'helpers/interfaces/components';
import { ContactBarProps } from 'helpers/interfaces/store';
import React, { useState, useEffect } from 'react';
import { ChatImageContainer, Container } from './styled';

function Chat(props: ChatProps) {
  const { chatRoom, expanded } = props;
  console.log(props);
  return (
    <Container>
      <ChatImageContainer>
        <img
          src="images/chat-logo.svg"
          className="w-full h-full object-contain
        "
          alt="Global Chat Room Icon"
        />
      </ChatImageContainer>
      {expanded && (
        <div className="w-full flex flex-col items-start justify-center overflow-hidden">
          <h2 className="text-white w-full font-primary font-semibold lg:text-base md:text-sm sm:text-xs text-xs sm:leading-5 leading-4 truncate">
            {chatRoom.name}
          </h2>
          <p className="text-white max-w-full font-primary lg:text-sm md:text-xs sm:text-xs text-xs truncate">
            {chatRoom.msg}
          </p>
        </div>
      )}
    </Container>
  );
}

export default Chat;
