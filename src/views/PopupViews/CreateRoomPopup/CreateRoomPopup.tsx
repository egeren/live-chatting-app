import React, { useState, useContext } from 'react';
import { Photo, TextInput, Button } from 'components';
import { IoClose } from 'react-icons/io5';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { SocketContext } from 'App';
import { useAppDispatch, useAppSelector } from 'hooks';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';
import { roomsDataActions } from 'store';
import { toast } from 'react-toastify';

function CreateRoomPopup(props: IPopupContentProps) {
  const { closePopup } = props;
  const [roomName, setRoomName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('default');

  const socket = useContext(SocketContext);
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCreateRoom = () => {
    const roomData = {
      roomName: roomName,
      userId: userData.id,
      roomAvatar: profilePhoto,
    };
    socket?.emit('create-room', roomData);
    socket?.on('new-room', (data: IRoomDataStore) => {
      dispatch(roomsDataActions.addRoom(data));
      toast.success('Room successfully created.', {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: 'light',
      });
      socket?.off('new-room');
      closePopup();
    });
  };

  return (
    <div className="relative flex flex-col room-create-popup bg-primary-100 max-w-[750px] md:w-2/3 sm:w-1/2 md:h-[450px] h-[350px] w-2/3 rounded-md">
      <IoClose
        onClick={() => closePopup()}
        className="absolute right-4 top-4 text-white md:text-3xl text-xl p-[2px] box-content cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full"
      />
      <div className="flex flex-row w-full title-container text-white pt-8">
        <h1 className="w-full font-primary text-white text-center md:text-4xl sm:text-xl text-xl">
          Create Private Room
        </h1>
      </div>
      <div className="flex items-center justify-center photo-container pt-10">
        <Photo
          type="chat"
          editable
          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
          onChange={handlePhotoChange}
        />
      </div>
      <div className="flex flex-col items-center pt-8">
        <TextInput
          placeholder="Room Name"
          className="bg-primary-300 md:w-[350px] w-2/3 h-10 rounded-md text-white"
          onChange={(e) => setRoomName(e.target.value)}
        />
        <div className="flex flex-row flex-1 gap-2 md:w-[350px] w-2/3 justify-between pt-4">
          <Button
            className="bg-[#838383] rounded-md md:w-[160px] w-6/12"
            value="Cancel"
            onClick={() => closePopup()}
          />
          <Button
            className="bg-[#33B6FF] rounded-md md:w-[160px] w-6/12"
            value="Create"
            onClick={handleCreateRoom}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateRoomPopup;
