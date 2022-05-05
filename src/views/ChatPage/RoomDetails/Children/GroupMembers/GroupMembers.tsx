import React, { useState, useEffect } from 'react';
import { ProfilePhoto } from 'components';
import { useAppSelector } from 'hooks';
import { MemberName, ProfilePhotoContainer } from './styled';

function GroupMembers() {
  return (
    <div className="absolute w-full flex flex-col max-h-full gap-3 overflow-y-scroll pb-4 ">
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
      <Member />
    </div>
  );
}

const Member = () => {
  const roomDetailsBarStore = useAppSelector((state) => state.roomDetailsBar);
  return (
    <div className="flex flex-row">
      <ProfilePhotoContainer {...roomDetailsBarStore}>
        <ProfilePhoto className="w-[50px] h-[50px]" />
      </ProfilePhotoContainer>
      <div className="flex flex-col justify-center flex-1 pl-2">
        <MemberName {...roomDetailsBarStore}>Jane Smith</MemberName>
      </div>
    </div>
  );
};

export default GroupMembers;
