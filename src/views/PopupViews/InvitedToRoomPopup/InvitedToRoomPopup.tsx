import { SocketContext } from 'App';
import { Button, Photo, TextInput } from 'components';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useFindUser } from 'hooks/useFindUser';
import React, { useState, useEffect, useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';
import { roomsDataActions } from 'store';

function InvitedToRoomPopup(props: IPopupContentProps) {
  const { closePopup, popupData } = props;
  const socket = useContext(SocketContext);
  const userData = useAppSelector((state) => state.userData);
  const usersData = useAppSelector((state) => state.usersData);

  const dispatch = useAppDispatch();
  const findUser = useFindUser();
  const handleInviteAccept = () => {
    const room = popupData.room as IRoomDataStore;
    const data = { roomId: room.id, user: userData };
    socket?.emit('accept-invite', data);
    dispatch(roomsDataActions.addRoom(room));
    dispatch(roomsDataActions.addUserToRoom(data));
    closePopup();
  };

  return (
    <div className="relative flex flex-col room-create-popup bg-primary-100 max-w-[750px] md:w-2/3 sm:w-1/2 h-fit w-2/3 py-8 rounded-md">
      <IoClose
        onClick={() => closePopup()}
        className="absolute right-4 top-4 text-white md:text-3xl text-xl p-[2px] box-content cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full"
      />
      <div className="flex flex-row w-full title-container text-white px-10 pt-4">
        <h1 className="w-full font-primary text-white text-center md:text-4xl sm:text-xl text-xl">
          {findUser(popupData.room.roomCreator)?.username} invited you to join
          room {popupData.room.roomName}
        </h1>
      </div>
      <div className="flex items-center justify-center photo-container pt-10">
        <Photo
          type="chat"
          photo={popupData.room.roomAvatar}
          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
        />
      </div>
      <div className="flex flex-col items-center pt-8">
        <div className="flex flex-row flex-1 gap-2 md:w-[350px] w-2/3 justify-between pt-4">
          <Button
            className="bg-[#838383] rounded-md md:w-[160px] w-6/12"
            value="Cancel"
            onClick={() => closePopup()}
          />
          <Button
            className="bg-[#33B6FF] rounded-md md:w-[160px] w-6/12"
            value="Accept"
            onClick={handleInviteAccept}
          />
        </div>
      </div>
    </div>
  );
}

export default InvitedToRoomPopup;
