import React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { popupActions } from 'store';

interface IPopupProps {
  content: (props: any) => JSX.Element | null;
}

function Popup(props: IPopupProps) {
  const { content } = props;
  const popupStore = useAppSelector((state) => state.popup);
  const dispatch = useAppDispatch();
  const closePopup = () => {
    dispatch(popupActions.closePopup());
  };
  const popupData = popupStore.popupData;
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-60 z-50 flex items-center justify-center">
      {React.createElement(content, { closePopup, popupData })}
    </div>
  );
}

export default Popup;
