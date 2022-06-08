import { useAppSelector } from 'hooks';
import React, { useState, useEffect } from 'react';
import { ChatScreenProps } from '../ChatScreen';

function Typers(props: ChatScreenProps) {
  const { chatRoom } = props;
  const chatScreenData = useAppSelector((state) => state.chatScreenData);

  if (chatScreenData.typers.length < 1) return <p> </p>;

  const typers = chatScreenData.typers
    .filter((typer) => {
      return chatRoom.id === typer.roomId;
    })
    .map((typer) => {
      return typer.username;
    });

  return (
    <>
      <p className="font-primary text-white">
        <span className="font-bold">{typers.join(', ')}</span>
        {typers.length > 1 ? ' are' : ' is'} typing...
      </p>
    </>
  );
}

export default Typers;
