import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
  roomdetails-container
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
    p.$expanded ? 'w-[270px] z-50' : 'sm:w-[70px] w-[50px]'}
`;

export const ProfilePhotoContainer = styled.div`
  flex flex-col self-center
  transition-all
  ${(p: { $expanded: boolean }) =>
    p.$expanded
      ? 'w-[150px] h-[150px] mt-10'
      : 'mt-5 md:w-[60px] md:h-[60px] w-[45px] h-[45px]'}
`;

export const RoomTitleContainer = styled.div`
  flex flex-col text-center font-primary
  transition-all
  ${(p: { $expanded: boolean }) =>
    p.$expanded ? ' pt-4 text-2xl' : 'text-[0px]'}
`;

export const RoomDescriptionContainer = styled.div`
  flex flex-col-reverse text-center font-primary
  transition-all
  ${(p: { $expanded: boolean }) =>
    p.$expanded ? 'text-base pt-3' : 'text-[0px]'}
`;

export const RoomMembersTitle = styled.h1`
  font-primary 
  ${(p: { $expanded: boolean }) =>
    p.$expanded ? 'text-base pb-4' : 'text-[0px]'}
`;
