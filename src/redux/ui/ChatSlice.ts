import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { IRoomDataStore } from 'redux/rooms/RoomsSlice';

interface IChatSlice {
  selectedChat: IRoomDataStore | null;
}
const initialState: IChatSlice = {
  selectedChat: null,
};

const { reducer, actions } = createSlice({
  name: 'chatScreen',
  initialState: initialState,
  reducers: {
    setSelectedChat: (state, action: PayloadAction<IRoomDataStore | null>) => {
      state.selectedChat = action.payload;
      return state;
    },
  },
});

export { reducer, actions };
