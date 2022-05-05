import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
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
  pl-2

  ${(p: RoomDetailsBarProps) => (p.expanded ? 'w-[270px] z-50' : 'w-[70px]')}
`;

export const ProfilePhotoContainer = styled.div`
  mt-10 flex flex-col self-center
  transition-all
  ${(p: RoomDetailsBarProps) =>
    p.expanded ? 'w-[150px] h-[150px]' : 'w-[60px] h-[60px] -ml-3'}
`;

export const RoomTitleContainer = styled.div`
  flex flex-col pt-4 text-center font-primary
  transition-all
  ${(p: RoomDetailsBarProps) => (p.expanded ? 'text-2xl' : 'text-[0px]')}
`;

export const RoomDescriptionContainer = styled.div`
  flex flex-col pt-3 text-center font-primary
  transition-all
  ${(p: RoomDetailsBarProps) => (p.expanded ? 'text-base' : 'text-[0px]')}
`;

export const RoomMembersTitle = styled.h1`
  font-primary pb-4
  ${(p: RoomDetailsBarProps) => (p.expanded ? 'text-base' : 'text-[0px]')}
`;
