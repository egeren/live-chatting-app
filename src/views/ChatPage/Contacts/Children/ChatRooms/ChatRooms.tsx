import React, { useEffect } from 'react';
import { ChatCategory, Container } from './styled';
import { Chat } from 'components';
import { IoAdd } from 'react-icons/io5';
import { ContactBarProps } from 'helpers/interfaces/store';
import { useAppDispatch, useAppSelector } from 'hooks';
import { popupActions } from 'store';
import { CreateRoomPopup } from 'views/ChatPage/PopupViews';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';

function ChatRooms(props: ContactBarProps) {
  const { expanded } = props;
  const roomsData = useAppSelector((state) => state.roomsData);
  const dispatch = useAppDispatch();

  const handleCreateRoomClick = () => {
    dispatch(popupActions.openPopup(CreateRoomPopup));
  };

  return (
    <Container>
      <div className="flex flex-col">
        <ChatCategory $expanded={expanded}>Global Chat Rooms</ChatCategory>

        {roomsData.map((room) => {
          if (room.isGlobal)
            return <Chat key={room.id} chatRoom={room} expanded />;
        })}
      </div>
      <div className="flex flex-shrink-0 flex-col">
        <div className="flex flex-row items-center justify-between pr-3">
          <ChatCategory $expanded={expanded}>Private Chat Rooms</ChatCategory>
          {expanded && (
            <IoAdd
              onClick={handleCreateRoomClick}
              className="text-white text-3xl p-1 cursor-pointer hover:bg-[#2e2e2e] active:bg-[#2e2e2e] rounded-full"
            />
          )}
        </div>
        {roomsData.map((room) => {
          if (!room.isGlobal)
            return <Chat key={room.id} chatRoom={room} expanded />;
        })}
      </div>
    </Container>
  );
}

export default ChatRooms;
