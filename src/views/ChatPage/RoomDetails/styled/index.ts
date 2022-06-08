import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
  room-details-container
  absolute
  lg:relative
  top-0
  right-0
  flex
  flex-col
  h-full
  max-h-full
  overflow-hidden
  bg-primary-200
  text-white
  transition-all
  px-2

  ${(p: { $expanded: boolean }) =>
    p.$expanded
      ? 'room-details-expanded w-[270px] z-50'
      : 'room-details-collapsed sm:w-[70px] w-[50px]'}
`;

export const ProfilePhotoContainer = styled.div`
  profile-container
  flex flex-col self-center
  flex-shrink-0
  transition-all
`;

export const RoomTitleContainer = styled.div`
  room-title-container
  flex flex-col text-center font-primary
  transition-all

`;

export const RoomDescriptionContainer = styled.div`
  room-description-container
  flex flex-col-reverse text-center font-primary
  transition-all
`;

export const RoomMembersTitle = styled.h1`
  room-members-title
  font-primary 
`;
