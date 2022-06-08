import React, { useEffect } from 'react';
import { ChatCategory, Container } from './styled';
import { Chat, Tooltip } from 'components';
import { IoAdd } from 'react-icons/io5';
import { ContactBarProps } from 'helpers/interfaces/store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { popupActions } from 'store';
import { CreateRoomPopup, InvitedToRoomPopup } from 'views/PopupViews';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';

interface ChatRoomsProps {
  roomsData: IRoomDataStore[];
}
function ChatRooms(props: ChatRoomsProps) {
  const { roomsData } = props;

  const dispatch = useAppDispatch();

  const handleCreateRoomClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    dispatch(popupActions.openPopup(CreateRoomPopup));
  };

  return (
    <Container>
      <div className="flex flex-col">
        <ChatCategory>Global Chat Rooms</ChatCategory>

        {roomsData.map((room) => {
          if (room.isGlobal) return <Chat key={room.id} chatRoom={room} />;
        })}
      </div>
      <div className="flex flex-shrink-0 flex-col">
        <div className="flex flex-row items-center justify-between pr-3">
          <ChatCategory>Private Chat Rooms</ChatCategory>
          <div className="create-room-btn">
            <Tooltip text="Create a Room">
              <IoAdd
                onClick={handleCreateRoomClick}
                className=" text-white text-3xl p-1 cursor-pointer hover:bg-[#2e2e2e] active:bg-[#2e2e2e] rounded-full"
              />
            </Tooltip>
          </div>
        </div>
        {roomsData.map((room) => {
          if (!room.isGlobal) return <Chat key={room.id} chatRoom={room} />;
        })}
      </div>
    </Container>
  );
}

export default ChatRooms;
