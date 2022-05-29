import React, { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import ChatRooms from './Children/ChatRooms';
import ProfileInfo from './Children/ProfileInfo';
import { Container } from './styled';
import SearchBar from './Children/SearchBar';
import OnlineUsers from './Children/OnlineUsers';
import { contactBarActions, popupActions } from 'store';
import { CreateRoomPopup } from '../PopupViews';

function Contacts() {
  const contactsBarStore = useAppSelector((state) => state.contactsBar);
  const dispatch = useAppDispatch();
  const expanded = contactsBarStore.expanded;
  const handleContactBarClick = (e: any) => {
    dispatch(contactBarActions.toggleContactsBar());
    console.log(e);
  };
  return (
    <div onClick={handleContactBarClick} className="z-40">
      <Container id="contacts-container" $expanded={expanded}>
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
