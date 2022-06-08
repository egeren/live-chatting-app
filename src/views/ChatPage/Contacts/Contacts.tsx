import React, { MouseEventHandler, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import ChatRooms from './Children/ChatRooms';
import ProfileInfo from './Children/ProfileInfo';
import { Container } from './styled';
import SearchBar from './Children/SearchBar';
import OnlineUsers from './Children/OnlineUsers';
import { contactBarActions, popupActions } from 'store';

function Contacts() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);
  const roomsData = useAppSelector((state) => state.roomsData);
  const [roomsDataState, setRoomsDataState] = useState(roomsData);
  const dispatch = useAppDispatch();
  const expanded = contactsBarStore.expanded;

  const handleContactBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(contactBarActions.toggleContactsBar());
  };

  const handleSearch = (text: string) => {
    const results = roomsData.filter((room) => {
      return (
        room.roomName.toLowerCase().includes(text.toLowerCase()) ||
        room.isGlobal
      );
    });
    setRoomsDataState(results);
  };

  useEffect(() => {
    setRoomsDataState(roomsData);
  }, [roomsData]);
  return (
    <div onClick={handleContactBarClick}>
      <Container id="contacts-container" $expanded={expanded}>
        <ProfileInfo />
        <div className="flex flex-col w-full h-full overflow-y-scroll">
          <ChatRooms roomsData={roomsDataState} />
        </div>
        <div className="flex justify-center pt-2 md:px-4 sm:px-3 px-2">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex md:px-4 sm:px-3 px-2">
          <OnlineUsers expanded={expanded} />
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
