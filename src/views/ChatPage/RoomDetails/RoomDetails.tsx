import React, { useState, useEffect } from 'react';
import { ProfilePhoto } from 'components';
import { useAppSelector } from 'hooks';
import GroupMembers from './Children/GroupMembers';
import {
  Container,
  ProfilePhotoContainer,
  RoomDescriptionContainer,
  RoomMembersTitle,
  RoomTitleContainer,
} from './styled';

function RoomDetails() {
  const roomDetailsBarStore = useAppSelector((state) => state.roomDetailsBar);
  console.log(roomDetailsBarStore.expanded);
  return (
    <Container>
      <ProfilePhotoContainer $expanded={roomDetailsBarStore.expanded}>
        <ProfilePhoto className="max-h-full max-w-full" />
      </ProfilePhotoContainer>
      <RoomTitleContainer $expanded={roomDetailsBarStore.expanded}>
        <h1>Global Room 1</h1>
      </RoomTitleContainer>
      <RoomDescriptionContainer $expanded={roomDetailsBarStore.expanded}>
        <p>There is no description for this group.</p>
      </RoomDescriptionContainer>
      <div className="flex flex-col h-full pt-6">
        <RoomMembersTitle $expanded={roomDetailsBarStore.expanded}>
          Users in this room - 17
        </RoomMembersTitle>
        <div className="flex relative h-full">
          <GroupMembers expanded />
        </div>
      </div>
    </Container>
  );
}

export default React.memo(RoomDetails);
