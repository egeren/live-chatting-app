import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const ProfilePhotoContainer = styled.div`
  flex
  ${(p: RoomDetailsBarProps) => (p.expanded ? '' : 'pl-0 no-scrollbar')}
`;

export const MemberName = styled.div`
  text-white font-primary
  transition-all
  ${(p: RoomDetailsBarProps) => (p.expanded ? 'text-lg' : 'text-[0px]')}
`;
