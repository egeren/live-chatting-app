import React, { useState, useEffect, useRef } from 'react';
import { Photo } from 'components';
import { useAppSelector } from 'hooks';
import { MemberName, ProfilePhotoContainer } from '../GroupMembers/styled';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { IUserDataStore } from 'redux/user/UserSlice';

interface IMemberProps {
  member: IUserDataStore;
}
const Member = (props: IMemberProps) => {
  const { username, avatar } = props.member;
  const photoContainer = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-row items-center h-full flex-shrink-0 overflow-hidden">
      <div
        className="member-profile-container w-10 h-10 flex flex-grow-1"
        ref={photoContainer}
      >
        <Photo photo={avatar} />
      </div>
      <div className="member-name flex flex-col justify-center overflow-hidden pl-2">
        <MemberName>{username} </MemberName>
      </div>
    </div>
  );
};

export default Member;
