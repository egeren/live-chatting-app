import React, { useState, useContext } from 'react';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { IoClose } from 'react-icons/io5';
import { Button, List } from 'components';
import Member from 'views/ChatPage/RoomDetails/Children/Member/Member';
import { useAppSelector } from 'hooks';
import { IUserDataStore } from 'redux/user/UserSlice';
import { SocketContext } from 'App';
import { toast } from 'react-toastify';

function AddUsersPopup(props: IPopupContentProps) {
  const { closePopup } = props;
  const [selectedUsers, setSelectedUsers] = useState([] as IUserDataStore[]);
  const userData = useAppSelector((state) => state.userData);
  const usersData = useAppSelector((state) => state.usersData);
  const selectedChat = useAppSelector(
    (state) => state.chatScreenData.selectedChat
  );
  const socket = useContext(SocketContext);

  const handleListChange = (items: IUserDataStore[]) => {
    setSelectedUsers(items);
  };

  const handleInviteUsers = () => {
    socket?.emit('invite-users', {
      roomId: selectedChat?.id,
      users: selectedUsers,
    });
    toast.info('Users invited', {
      hideProgressBar: true,
    });
    closePopup();
  };

  const users = () => {
    const userIdsInRoom = selectedChat?.roomUsers.map((user) => user.id);
    const filteredUsers = usersData.filter((user) => {
      return !userIdsInRoom?.includes(user.id) && user.isOnline;
    });

    return filteredUsers.map((user) => (
      <List.Item itemData={user} key={user.id} checkable>
        <div className="w-full h-10">
          <Member member={user} />
        </div>
      </List.Item>
    ));
  };
  users();

  return (
    <div className="relative flex flex-col flex-shrink room-create-popup bg-primary-100  md:w-6/12 max-h-[85vh] h-full w-11/12 rounded-md">
      <IoClose
        onClick={closePopup}
        className="absolute right-4 top-4 text-white md:text-3xl text-xl p-[2px] box-content cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full"
      />
      <div className="flex flex-row w-full title-container text-white pt-10">
        <h1 className="w-full font-primary text-white text-center lg:text-4xl md:text-3xl sm:text-2xl text-xl">
          Add Users to Test Room
        </h1>
      </div>
      <div className="flex flex-1 overflow-hidden  items-start justify-center user-list-wrapper mt-8 ">
        <div className="user-list-container bg-primary-200 flex flex-col self-stretch lg:w-7/12 w-10/12 rounded-sm overflow-y-scroll">
          <List onChange={handleListChange}>{users()}</List>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 ">
        <div className="flex flex-row flex-1 gap-2 md:w-[350px] w-2/3 justify-between pt-4">
          <Button
            className="bg-[#838383] rounded-md md:w-[160px] w-6/12"
            value="Cancel"
            onClick={closePopup}
          />
          <Button
            className="bg-[#33B6FF] rounded-md md:w-[160px] w-6/12"
            value="Invite"
            onClick={handleInviteUsers}
          />
        </div>
      </div>
    </div>
  );
}

export default AddUsersPopup;
