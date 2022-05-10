import React from 'react';
import { ChatCategory, Container } from './styled';
import { Chat } from 'components';
import { IoAdd } from 'react-icons/io5';
import { ContactBarProps } from 'helpers/interfaces/store';
import { useAppDispatch } from 'hooks';
import { popupActions } from 'store';
import { CreateRoomPopup } from 'views/ChatPage/PopupViews';

function ChatRooms(props: ContactBarProps) {
  const { expanded } = props;
  const dispatch = useAppDispatch();

  const chatRoom1 = {
    id: '1',
    name: 'Global Room 1',
    img: 'images/chat-logo.svg',
    msg: 'Jane: yes im working on it',
  };

  const chatRoom2 = {
    id: '2',
    name: 'React.js Dev Team',
    img: 'images/react.png',
    msg: 'David: yes, we should refactor that',
  };

  const handleCreateRoomClick = () => {
    dispatch(popupActions.openPopup(CreateRoomPopup));
  };
  return (
    <Container>
      <div className="flex flex-col">
        <ChatCategory {...props}>Global Chat Rooms</ChatCategory>

        <Chat {...props} chatRoom={chatRoom1} />
      </div>
      <div className="flex flex-shrink-0 flex-col">
        <div className="flex flex-row items-center justify-between pr-3">
          <ChatCategory {...props}>Private Chat Rooms</ChatCategory>
          {expanded && (
            <IoAdd
              onClick={handleCreateRoomClick}
              className="text-white text-3xl p-1 cursor-pointer hover:bg-[#2e2e2e] active:bg-[#2e2e2e] rounded-full"
            />
          )}
        </div>

        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
        <Chat {...props} chatRoom={chatRoom2} />
      </div>
    </Container>
  );
}

export default React.memo(ChatRooms);
