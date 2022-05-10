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

const store = configureStore({
  reducer: {
    contactsBar: contactBarReducer,
    roomDetailsBar: roomDetailsBarReducer,
    popup: popupReducer,
  },
});

export default store;
export { contactBarActions, roomDetailsBarActions, popupActions };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
