import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserDataStore {
  id: string;
  username: string;
  avatar: string;
  isOnline: boolean;
  token: string;
}

const initialState: IUserDataStore = {
  id:
    localStorage.getItem('userId') != null
      ? localStorage.getItem('userId')!
      : '',
  username: '',
  avatar: '',
  isOnline: false,
  token: localStorage.getItem('userId') ? localStorage.getItem('token')! : '',
};

const { actions, reducer } = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserDataStore>) => {
      state = action.payload;
      localStorage.setItem('user-data', JSON.stringify(state));
      return state;
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
    setUserStatus: (state, action) => {
      state.isOnline = action.payload;
    },
    logout: (state) => {
      state = {
        id: '',
        username: '',
        avatar: '',
        isOnline: false,
        token: '',
      };
      return state;
    },
  },
});

export { actions, reducer };
