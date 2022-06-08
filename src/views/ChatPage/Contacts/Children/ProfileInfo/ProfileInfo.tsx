import React, { useContext } from 'react';
import { Photo, Tooltip } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoLogOutOutline, IoSettings } from 'react-icons/io5';
import { Container, IconsContainer } from './styled';
import { useAppSelector } from 'hooks';
import { SocketContext } from 'App';
import { useDispatch } from 'react-redux';
import { roomsDataActions, userDataActions } from 'store';
import { useNavigate } from 'react-router-dom';

function ProfileInfo() {
  const userData = useAppSelector((state) => state.userData);
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const data = {
          userId: userData.id,
          avatar: reader.result as string,
        };
        socket?.emit('photo-change', data);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleLogout = () => {
    socket?.disconnect();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };
  return (
    <Container>
      <Photo
        className="xl:w-[70px] xl:h-[70px] lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] flex flex-shrink-0"
        editable
        photo={userData.avatar}
        onChange={handlePhotoChange}
      />

      <div className="user-info-container flex w-full">
        <h2 className="text-white truncate font-primary xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base">
          {userData.username}
        </h2>
        <IconsContainer>
          <Tooltip text="Logout">
            <IoLogOutOutline
              onClick={handleLogout}
              className="text-white cursor-pointer"
            />
          </Tooltip>
        </IconsContainer>
      </div>
    </Container>
  );
}

export default ProfileInfo;
