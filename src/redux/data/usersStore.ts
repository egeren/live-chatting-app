import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserDataStore } from 'redux/user/UserSlice';

const { actions, reducer } = createSlice({
  name: 'otherUsersData',
  initialState: [] as IUserDataStore[],
  reducers: {
    setUsersData: (state, action: PayloadAction<IUserDataStore[]>) => {
      state = action.payload;
      return state;
    },
    addUser: (state, action: PayloadAction<IUserDataStore>) => {
      state.push(action.payload);
    },
  },
});

export { actions, reducer };
