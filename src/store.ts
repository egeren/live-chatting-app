import { configureStore } from '@reduxjs/toolkit';

import {
  reducer as contactBarReducer,
  actions as contactBarActions,
} from './redux/ui/ContactsSlice';

const store = configureStore({
  reducer: {
    contactsBar: contactBarReducer,
  },
});

export default store;
export { contactBarActions };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
