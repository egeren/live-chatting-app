import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { useAppDispatch } from 'hooks';
import { contactBarActions } from 'store';

const initialState: RoomDetailsBarProps = {
  roomDetailsBarSize: 0,
  expanded: window.innerWidth >= 976,
};

const { reducer, actions } = createSlice({
  name: 'roomDetails',
  initialState: initialState,
  reducers: {
    toggleRoomDetailsBar: (state) => {
      state.expanded = !state.expanded;
    },
    setRoomDetailsBar: (state, action: PayloadAction<boolean>) => {
      state.expanded = action.payload;
    },
    setRoomDetailsBarSize: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.roomDetailsBarSize = action.payload || 0;
    },
  },
});

export { reducer, actions };
