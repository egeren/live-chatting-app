import React, { useState, useEffect } from 'react';
import { AvatarGroup, TextInput } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoPerson } from 'react-icons/io5';

function OnlineUsers(props: ContactBarProps) {
  const { expanded } = props;
  return (
    <div className="flex flex-shrink-0 flex-col w-full">
      {expanded ? <Expanded /> : <Collapsed />}
    </div>
  );
}

const Expanded = () => {
  return (
    <>
      <h3 className="font-primary text-white py-2">Online Users (13)</h3>
      <div className="flex w-full">
        <AvatarGroup>
          <AvatarGroup.Avatar avatar="s"></AvatarGroup.Avatar>
        </AvatarGroup>
      </div>
    </>
  );
};

const Collapsed = () => {
  return (
    <div className="pt-3">
      <IoPerson className="text-lg text-green-500 text-center w-full" />
      <div className="flex w-full">
        <h1 className="font-primary text-white text-center w-full">17+</h1>
      </div>
    </div>
  );
};

export default OnlineUsers;
