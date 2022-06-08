import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPopupProps } from 'helpers/interfaces/store/IPopup';

import { Button } from 'components';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { CreateRoomPopup } from 'views/PopupViews';

const initialState: IPopupProps = {
  isOpen: false,
  popupElement: null,
  popupData: null,
};

const { reducer, actions } = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    openPopup(
      state,
      action: PayloadAction<(props: IPopupContentProps) => JSX.Element>
    ) {
      state.popupElement = action.payload;
      state.isOpen = true;
    },
    closePopup(state) {
      state.isOpen = false;
    },
    setPopupData(state, action: PayloadAction<any>) {
      state.popupData = action.payload;
    },
  },
});

export { reducer, actions };
