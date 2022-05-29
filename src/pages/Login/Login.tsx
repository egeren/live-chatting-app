import React, { useContext, useEffect, useState } from 'react';
import { ProfilePhoto, TextInput } from 'components';
import { Container } from './styled';
import { IoArrowForward } from 'react-icons/io5';
import { AiOutlineLoading } from 'react-icons/ai';
import { useAppDispatch } from 'hooks';
import { SocketContext } from 'App';
import { userDataActions } from 'store';
import { IUserDataStore } from 'redux/user/UserSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [profilePhoto, setProfilePhoto] = useState('default');
  const [loading, setLoading] = useState(false);
  const socket = useContext(SocketContext);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setLoading(true);
    const target = e.target as HTMLInputElement;
    const userName = target.value;

    const data = {
      username: userName,
      avatar: profilePhoto,
    };

    socket?.emit('new-user', data);
  };

  useEffect(() => {
    socket?.on('logged-in', (data: IUserDataStore) => {
      data.loggedIn = true;
      dispatch(userDataActions.setUserData(data));
      navigate('/chat');
    });
    socket?.on('login-error', (error) => {
      setLoading(false);
      console.log(error);
    });
  }, []);

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = URL.createObjectURL(e.target.files[0]);
      setProfilePhoto(data);
    }
  };
  return (
    <Container>
      <h1 className="text-center 2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[50px] sm:text-[47px] text-[34px]">
        Live Chatting App
      </h1>
      <ProfilePhoto
        className="2xl:w-60 2xl:h-60 xl:w-60 xl:h-60 lg:w-60 lg:h-60 sm:w-52 sm:h-52 h-32 w-32 mt-9"
        editable
        onChange={handlePhotoChange}
      />
      <TextInput
        placeholder="Nickname"
        icon={
          loading ? (
            <AiOutlineLoading className="animate-spin" />
          ) : (
            <IoArrowForward />
          )
        }
        iconPosition="right"
        iconClass="2xl:text-[2.5rem] text-black cursor-pointer"
        className="2xl:w-[450px] 2xl:h-16 lg:w-80 lg:h-16 w-72 h-12 rounded-xl 2xl:text-2xl text-xl mt-9"
        onSend={(e) => handleLogin(e)}
      />
      <p className="text-center 2xl:text-[26px] lg:text-[26px] md:text-[20px] mt-9">
        Choose a name, avatar and start texting!
      </p>
    </Container>
  );
}

export default Login;
