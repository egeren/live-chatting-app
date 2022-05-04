import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactBarProps } from 'helpers/interfaces/store';

const initialState: ContactBarProps = {
  contactBarSize: 0,
  expanded: window.innerWidth >= 976,
};

const { reducer, actions } = createSlice({
  name: 'contactsBar',
  initialState: initialState,
  reducers: {
    toggleContactsBar: (state) => {
      if (window.innerWidth < 976) {
        state.expanded = !state.expanded;
      }
    },
    setContactsBar: (state, action: PayloadAction<boolean>) => {
      state.expanded = action.payload;
    },
    setContactBarSize: (state, action: PayloadAction<number | undefined>) => {
      state.contactBarSize = action.payload || 0;
    },
  },
});

export { reducer, actions };
