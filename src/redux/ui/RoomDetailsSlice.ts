import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { useAppDispatch } from 'hooks';
import { contactBarActions } from 'store';

const initialState: RoomDetailsBarProps = {
  expanded: false,
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
  },
});

export { reducer, actions };
