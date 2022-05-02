import React from 'react';
import { useAppSelector } from 'hooks';
import ChatRooms from '../ChatRooms';
import ProfileInfo from './Children/ProfileInfo';
import { Container } from './styled';

function Contacts() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);

  return (
    <Container id="contacts-container" {...contactsBarStore}>
      <ProfileInfo {...contactsBarStore} />
      <div className="w-full h-full overflow-hidden">
        <ChatRooms {...contactsBarStore} />
      </div>
    </Container>
  );
}

export default Contacts;
