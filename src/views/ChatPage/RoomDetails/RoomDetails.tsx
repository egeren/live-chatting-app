import React, { useState, useEffect } from 'react';
import { Photo } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import GroupMembers from './Children/GroupMembers';
import {
  Container,
  ProfilePhotoContainer,
  RoomDescriptionContainer,
  RoomMembersTitle,
  RoomTitleContainer,
} from './styled';
import { popupActions, roomDetailsBarActions } from 'store';
import { IoAdd } from 'react-icons/io5';
import { AddUsersPopup } from '../../PopupViews';

function RoomDetails() {
  const roomDetailsBarStore = useAppSelector((state) => state.roomDetailsBar);
  const chatScreenData = useAppSelector((state) => state.chatScreenData);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();
  if (chatScreenData.selectedChat === null) return null;

  const { id, roomAvatar, roomName, roomDescription, roomUsers } =
    chatScreenData.selectedChat;

  const handleRoomDetailsClick = () => {
    dispatch(roomDetailsBarActions.toggleRoomDetailsBar());
  };
  console.log('roomdetails render', chatScreenData.selectedChat.roomUsers);
  const handleAddUsersClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(popupActions.openPopup(AddUsersPopup));
  };
  return (
    <div onClick={handleRoomDetailsClick}>
      <Container $expanded={roomDetailsBarStore.expanded}>
        <ProfilePhotoContainer>
          <Photo className="h-full w-full" photo={roomAvatar} />
        </ProfilePhotoContainer>
        <RoomTitleContainer>
          <h1>{roomName}</h1>
        </RoomTitleContainer>
        <RoomDescriptionContainer>
          <p>{roomDescription}</p>
        </RoomDescriptionContainer>
        <div className="flex flex-col flex-shrink-0 h-full pt-6">
          <div className="flex justify-between items-center">
            <RoomMembersTitle>
              Users in this room - {roomUsers.length}
            </RoomMembersTitle>
            {chatScreenData.selectedChat.roomCreator == userData.id && (
              <div
                className="add-users-button p-1 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-20"
                onClick={handleAddUsersClick}
              >
                <IoAdd className="text-xl" />
              </div>
            )}
          </div>
          <div className="flex relative h-full pt-4">
            <GroupMembers members={chatScreenData.selectedChat.roomUsers} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default RoomDetails;
