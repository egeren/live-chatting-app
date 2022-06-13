import React from 'react';
import { Button } from 'components';
import Lottie from 'react-lottie';
import { AddUsersPopup } from 'views/PopupViews';
import * as animationData from './users-lottie.json';
import { useAppDispatch } from './../../../../hooks/index';
import { popupActions } from 'store';
import { IoAdd } from 'react-icons/io5';

const lottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function EmptyScreen() {
  const dispatch = useAppDispatch();

  const handleAddUsers = () => {
    dispatch(popupActions.openPopup(AddUsersPopup));
  };
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <div className="flex xl:w-[400px] lg:w-[300px] md:w-[280px] sm:w-[250px] w-[200px] z-0">
        <Lottie
          options={lottieOptions}
          isClickToPauseDisabled
          width="100%"
          style={{ zIndex: -50 }}
        />
      </div>
      <div className="flex">
        <h1 className="font-primary xl:text-6xl lg:text-5xl md:text-3xl sm:text-3xl text-2xl text-white text-center">
          This place looks empty
        </h1>
      </div>
      <div className="flex pt-4 px-10">
        <p className="font-primary xl:text-xl lg:text-lg md:text-sm sm:text-sm text-xs text-white text-center">
          Add new users to this room by clicking &quot;+&quot; button
        </p>
      </div>
      <div className="flex pt-10">
        <Button
          className="rounded-md bg-[#33B6FF] w-full text-xl py-1 px-4"
          value="Add users"
          onClick={handleAddUsers}
          icon={IoAdd}
        />
      </div>
    </div>
  );
}

export default EmptyScreen;
