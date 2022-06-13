import React, { useState, useEffect } from 'react';
import { AvatarGroup, TextInput, Tooltip } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoPerson } from 'react-icons/io5';
import { useAppSelector } from 'hooks';
import { IUserDataStore } from 'redux/user/UserSlice';

function OnlineUsers(props: ContactBarProps) {
  const { expanded } = props;
  return (
    <div className="flex flex-shrink-0 flex-col w-full">
      {expanded ? <Expanded /> : <Collapsed />}
    </div>
  );
}

const Expanded = () => {
  const usersData = useAppSelector((state) => state.usersData);
  return (
    <>
      <h3 className="font-primary text-white py-2">
        Online Users ({usersData.filter((user) => user.isOnline).length})
      </h3>
      <div className="flex w-full">
        <AvatarGroup>
          {usersData
            .filter((user) => user.isOnline)
            .map((user, index) => (
              <AvatarGroup.Avatar
                isFirst={index === 0}
                key={index}
                avatar={user.avatar}
                tooltipText={user.username}
              />
            ))}
        </AvatarGroup>
      </div>
    </>
  );
};

const Collapsed = () => {
  const usersData = useAppSelector((state) => state.usersData);
  return (
    <div className="pt-3">
      <IoPerson className="text-lg text-green-500 text-center w-full" />
      <div className="flex w-full">
        <h1 className="font-primary text-white text-center w-full">
          {usersData.filter((user) => user.isOnline).length}+
        </h1>
      </div>
    </div>
  );
};

export default OnlineUsers;
