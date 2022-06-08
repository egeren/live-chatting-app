import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserDataStore } from 'redux/user/UserSlice';

export interface IMessageData {
  id: string;
  userId: string;
  roomId: string;
  message: string;
  timestamp: Date;
}
export interface IRoomDataStore {
  id: string;
  roomName: string;
  roomDescription: string;
  roomCreator: string;
  roomAvatar: string;
  roomUsers: IUserDataStore[];
  roomMessages: IMessageData[];
  isGlobal: boolean;
}

const initialState: IRoomDataStore[] = [
  {
    id: '',
    roomName: '',
    roomDescription: '',
    roomCreator: '',
    roomAvatar: '',
    roomUsers: [],
    roomMessages: [],
    isGlobal: false,
  },
];

const { actions, reducer } = createSlice({
  name: 'roomsData',
  initialState: initialState as IRoomDataStore[],
  reducers: {
    setRoomsData: (state, action: PayloadAction<IRoomDataStore[]>) => {
      return action.payload;
    },
    addMessage(state, action: PayloadAction<IMessageData>) {
      const room = state.find((room) => room.id === action.payload.roomId);
      if (room) {
        room.roomMessages.push(action.payload);
      }
    },
    addRoom(state, action: PayloadAction<IRoomDataStore>) {
      state.push(action.payload);
      return state;
    },
    addUserToRoom(
      state,
      action: PayloadAction<{ roomId: string; user: IUserDataStore }>
    ) {
      const room = state.find((room) => room.id === action.payload.roomId);
      if (room) {
        room.roomUsers.push(action.payload.user);
      }
    },
  },
});

export { actions, reducer };
