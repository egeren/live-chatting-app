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

import {
  reducer as roomsDataReducer,
  actions as roomsDataActions,
} from './redux/rooms/RoomsSlice';

import {
  reducer as usersDataReducer,
  actions as usersDataActions,
} from './redux/data/usersStore';

import {
  reducer as chatScreenReducer,
  actions as chatScreenActions,
} from './redux/ui/ChatSlice';

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    contactsBar: contactBarReducer,
    roomDetailsBar: roomDetailsBarReducer,
    popup: popupReducer,
    roomsData: roomsDataReducer,
    usersData: usersDataReducer,
    chatScreenData: chatScreenReducer,
  },
});

export default store;
export {
  contactBarActions,
  roomDetailsBarActions,
  popupActions,
  userDataActions,
  roomsDataActions,
  usersDataActions,
  chatScreenActions,
};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
