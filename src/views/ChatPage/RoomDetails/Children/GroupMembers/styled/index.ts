import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const ProfilePhotoContainer = styled.div`
  flex
  flex-shrink-0
  ${(p: RoomDetailsBarProps) =>
    p.expanded
      ? 'h-[50px] w-[50px]'
      : 'sm:h-[50px] sm:w-[50px] w-[35px] h-[35px] no-scrollbar'}
`;

export const MemberName = styled.p`
  text-white 
  font-primary
  text-ellipsis
  whitespace-nowrap
  overflow-hidden
  w-full
  transition-all
  ${(p: RoomDetailsBarProps) => (p.expanded ? 'text-lg' : 'text-[0px]')}
`;
