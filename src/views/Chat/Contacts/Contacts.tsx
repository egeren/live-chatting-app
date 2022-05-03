import React from 'react';
import { useAppSelector } from 'hooks';
import ChatRooms from './Children/ChatRooms';
import ProfileInfo from './Children/ProfileInfo';
import { Container } from './styled';
import { TextInput } from 'components';
import { IoSearch } from 'react-icons/io5';
import SearchBar from './Children/SearchBar';
import OnlineUsers from './Children/OnlineUsers';

function Contacts() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);

  return (
    <Container id="contacts-container" {...contactsBarStore}>
      <ProfileInfo {...contactsBarStore} />
      <div className="flex w-full h-full">
        <ChatRooms {...contactsBarStore} />
      </div>
      <div className="flex justify-center md:px-4 sm:px-3 px-2">
        <SearchBar {...contactsBarStore} />
      </div>
      <div className="flex">
        <OnlineUsers />
      </div>
    </Container>
  );
}

export default Contacts;
