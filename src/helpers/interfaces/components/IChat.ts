import { IRoomDataStore } from 'redux/rooms/RoomsSlice';
import { ContactBarProps } from '../store';

export interface ChatProps extends ContactBarProps {
  chatRoom: IRoomDataStore;
}
