import React from 'react';
import { ProfilePhoto } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoLogOutOutline, IoSettings } from 'react-icons/io5';
import { Container, IconsContainer } from './styled';

function ProfileInfo(props: ContactBarProps) {
  const { expanded } = props;
  return (
    <Container $expanded={expanded}>
      <ProfilePhoto
        className="xl:w-[70px] xl:h-[70px] lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[50px] w-[40px] h-[40px] sm:h-[50px] flex flex-shrink-0"
        editable
      />

      {(props.expanded || window.innerWidth > 768) && (
        <>
          <h2 className="text-white truncate font-primary xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base">
            Jane Smith
          </h2>
          <IconsContainer>
            <IoSettings className="text-white cursor-pointer" />
            <IoLogOutOutline className="text-white cursor-pointer" />
          </IconsContainer>
        </>
      )}
    </Container>
  );
}

export default ProfileInfo;
