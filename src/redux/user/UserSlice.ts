import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserDataStore {
  id: string;
  username: string;
  avatar: string;
  loggedIn: boolean;
}

const initialState: IUserDataStore = {
  id: '',
  username: '',
  avatar: '',
  loggedIn: false,
};

console.log(initialState);

const { actions, reducer } = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserDataStore>) => {
      state = action.payload;
      localStorage.setItem('user-data', JSON.stringify(state));
    },
    setUserId: (state, action) => {
      state.id = action.payload;
      localStorage.setItem('user-data', JSON.stringify(state));
    },
    setUserName: (state, action) => {
      state.username = action.payload;
      localStorage.setItem('user-data', JSON.stringify(state));
    },
    setUserAvatar: (state, action) => {
      state.avatar = action.payload;
      localStorage.setItem('user-data', JSON.stringify(state));
    },
  },
});

export { actions, reducer };
