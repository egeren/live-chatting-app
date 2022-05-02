import { ContactBarProps } from '../store';

export interface ChatRoom {
  id: string;
  name: string;
  msg: string;
}

export interface ChatProps extends ContactBarProps {
  chatRoom: ChatRoom;
}
