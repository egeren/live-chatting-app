import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const ProfilePhotoContainer = styled.div`
  member-profile-container
  flex
  flex-grow-1
`;

export const MemberName = styled.p`
  member-name
  text-white 
  font-primary
  text-ellipsis
  whitespace-nowrap
  overflow-hidden
  w-full
  transition-all
  
`;
