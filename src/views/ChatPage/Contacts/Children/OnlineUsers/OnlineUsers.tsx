import React, { useState, useEffect } from 'react';
import { AvatarGroup, TextInput, Tooltip } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoPerson } from 'react-icons/io5';
import { useAppSelector } from 'hooks';
import { IUserDataStore } from 'redux/user/UserSlice';

function OnlineUsers(props: ContactBarProps) {
  const usersData = useAppSelector((state) => state.usersData);
  const { expanded } = props;
  return (
    <div className="flex flex-shrink-0 flex-col w-full">
      {expanded ? (
        <Expanded usersData={usersData} />
      ) : (
        <Collapsed usersData={usersData} />
      )}
    </div>
  );
}

const Expanded = (props: { usersData: IUserDataStore[] }) => {
  const { usersData } = props;
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

const Collapsed = (props: { usersData: IUserDataStore[] }) => {
  const { usersData } = props;
  return (
    <div className="pt-3">
      <IoPerson className="text-lg text-green-500 text-center w-full" />
      <div className="flex w-full">
        <h1 className="font-primary text-white text-center w-full">
          {usersData.length}+
        </h1>
      </div>
    </div>
  );
};

export default OnlineUsers;
