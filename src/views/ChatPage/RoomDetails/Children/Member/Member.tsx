import React, { useState, useEffect } from 'react';
import { ProfilePhoto } from 'components';
import { useAppSelector } from 'hooks';
import { MemberName, ProfilePhotoContainer } from '../GroupMembers/styled';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';

const Member = (props: RoomDetailsBarProps) => {
  return (
    <div className="flex flex-row">
      <ProfilePhotoContainer {...props}>
        <ProfilePhoto className="w-full h-full" />
      </ProfilePhotoContainer>
      <div className="flex flex-col justify-center flex-1 pl-2">
        <MemberName {...props}>Jane Smith</MemberName>
      </div>
    </div>
  );
};

export default React.memo(Member);
