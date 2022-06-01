import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserDataStore } from 'redux/user/UserSlice';

export interface IRoomDataStore {
  id: string;
  roomName: string;
  roomDescription: string;
  roomCreator: string;
  roomAvatar: string;
  roomUsers: IUserDataStore[];
  roomMessages: [];
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
  },
});

export { actions, reducer };
