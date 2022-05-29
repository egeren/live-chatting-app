import { configureStore } from '@reduxjs/toolkit';

import {
  reducer as contactBarReducer,
  actions as contactBarActions,
} from './redux/ui/ContactsSlice';

import {
  reducer as roomDetailsBarReducer,
  actions as roomDetailsBarActions,
} from './redux/ui/RoomDetailsSlice';

import {
  reducer as popupReducer,
  actions as popupActions,
} from './redux/ui/PopupSlice';

import {
  reducer as userDataReducer,
  actions as userDataActions,
} from './redux/user/UserSlice';
import { userMiddleWare } from 'redux/middleware/userMiddleware';

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    contactsBar: contactBarReducer,
    roomDetailsBar: roomDetailsBarReducer,
    popup: popupReducer,
  },
});

export default store;
export {
  contactBarActions,
  roomDetailsBarActions,
  popupActions,
  userDataActions,
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
