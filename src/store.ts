import { configureStore } from '@reduxjs/toolkit';

import {
  reducer as contactBarReducer,
  actions as contactBarActions,
} from './redux/ui/ContactsSlice';

import {
  reducer as roomDetailsBarReducer,
  actions as roomDetailsBarActions,
} from './redux/ui/RoomDetailsSlice';

const store = configureStore({
  reducer: {
    contactsBar: contactBarReducer,
    roomDetailsBar: roomDetailsBarReducer,
  },
});

export default store;
export { contactBarActions, roomDetailsBarActions };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
