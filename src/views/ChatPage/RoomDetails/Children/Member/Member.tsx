import React, { useState, useEffect } from 'react';
import { ProfilePhoto } from 'components';
import { useAppSelector } from 'hooks';
import { MemberName, ProfilePhotoContainer } from '../GroupMembers/styled';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';

const Member = (props: RoomDetailsBarProps) => {
  const expanded = props.expanded;
  return (
    <div className="flex flex-row flex-1 h-full flex-shrink-0 overflow-hidden">
      <ProfilePhotoContainer $expanded>
        <ProfilePhoto className="w-full h-full" />
      </ProfilePhotoContainer>
      <div className="flex flex-col justify-center overflow-hidden pl-2">
        <MemberName $expanded>Jane Smith </MemberName>
      </div>
    </div>
  );
};

export default React.memo(Member);
