import React, { useState } from 'react';
import { ProfilePhoto, TextInput } from 'components';
import { Container } from './styled';
import { IoArrowForward } from 'react-icons/io5';

function Login() {
  return (
    <Container>
      <h1 className="text-center 2xl:text-[96px] xl:text-[60px] lg:text-[60px] md:text-[50px] sm:text-[47px] text-[34px]">
        Live Chatting App
      </h1>
      <ProfilePhoto
        editable
        className="2xl:w-96 2xl:h-96 xl:w-60 xl:h-60 lg:w-60 lg:h-60 sm:w-52 sm:h-52 h-32 w-32 mt-9"
      />
      <TextInput
        placeholder="Nickname"
        icon={<IoArrowForward />}
        iconPosition="right"
        iconClass="2xl:text-[3rem] text-black cursor-pointer"
        className="2xl:w-[500px] 2xl:h-24 lg:w-80 lg:h-16 w-72 h-12 rounded-xl 2xl:text-4xl text-xl mt-9"
      />
      <p className="text-center 2xl:text-[36px] lg:text-[26px] md:text-[20px] mt-9">
        Choose a name, avatar and start texting!
      </p>
    </Container>
  );
}

export default Login;
