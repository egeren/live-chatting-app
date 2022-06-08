import Photo from 'components/Photo';
import { ChatProps } from 'helpers/interfaces/components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useFindUser } from 'hooks/useFindUser';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { chatScreenActions } from 'store';
import { ChatImageContainer, Container } from './styled';

function Chat(props: ChatProps) {
  const { chatRoom } = props;
  const contactBarState = useAppSelector((state) => state.contactsBar);
  const dispatch = useAppDispatch();
  const findUser = useFindUser();

  const handleChatClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (contactBarState.expanded) {
      e.stopPropagation();
      dispatch(chatScreenActions.setSelectedChat(chatRoom));
    }
  };
  const lastMessage = useMemo(() => {
    const messages = chatRoom.roomMessages;
    if (messages.length > 0) {
      const username = findUser(messages[messages.length - 1].userId)?.username;
      return username + ': ' + messages[messages.length - 1].message;
    }
    return 'Send a message now!';
  }, [chatRoom.roomMessages]);
  return (
    <div onClick={handleChatClick}>
      <Container>
        <ChatImageContainer>
          <Photo photo={chatRoom.roomAvatar} type="chat" className="h-full" />
        </ChatImageContainer>

        <div className="w-full flex flex-col items-start justify-center overflow-hidden">
          <h2 className="text-white w-full font-primary font-semibold lg:text-base md:text-sm sm:text-xs text-xs sm:leading-5 leading-4 truncate">
            {chatRoom.roomName}
          </h2>
          <p className="text-white max-w-full font-primary lg:text-sm md:text-xs sm:text-xs text-xs truncate">
            {lastMessage}
          </p>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Chat);
