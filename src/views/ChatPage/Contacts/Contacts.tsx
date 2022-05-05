import React, { MouseEventHandler } from 'react';
import { useAppSelector } from 'hooks';
import ChatRooms from './Children/ChatRooms';
import ProfileInfo from './Children/ProfileInfo';
import { Container } from './styled';
import SearchBar from './Children/SearchBar';
import OnlineUsers from './Children/OnlineUsers';

function Contacts() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);

  const handleContactBarClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e);
  };
  return (
    <div onClick={handleContactBarClick} className="z-40">
      <Container id="contacts-container" {...contactsBarStore}>
        <ProfileInfo {...contactsBarStore} />
        <div className="flex flex-col w-full h-full overflow-y-scroll">
          <ChatRooms {...contactsBarStore} />
        </div>
        <div className="flex justify-center pt-2 md:px-4 sm:px-3 px-2">
          <SearchBar {...contactsBarStore} />
        </div>
        <div className="flex md:px-4 sm:px-3 px-2">
          <OnlineUsers {...contactsBarStore} />
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
