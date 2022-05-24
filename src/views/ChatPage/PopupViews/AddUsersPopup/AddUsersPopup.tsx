import React, { useState, useEffect } from 'react';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { IoClose } from 'react-icons/io5';
import { Button, ProfilePhoto, TextInput } from 'components';

function AddUsersPopup(props: IPopupContentProps) {
  const { closePopup } = props;

  return (
    <div className="relative flex flex-col room-create-popup bg-primary-100 max-w-[750px] md:w-2/3 sm:w-1/2 md:h-[450px] h-[350px] w-2/3 rounded-md">
      <IoClose
        onClick={closePopup}
        className="absolute right-4 top-4 text-white md:text-3xl text-xl p-[2px] box-content cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full"
      />
      <div className="flex flex-row w-full title-container text-white pt-8">
        <h1 className="w-full font-primary text-white text-center md:text-4xl sm:text-xl text-xl">
          Add Users to Malatyalılar
        </h1>
      </div>
      <div className="flex items-center justify-center photo-container pt-10">
        <ProfilePhoto
          editable
          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px]"
        />
      </div>
      <div className="flex flex-col items-center pt-8">
        <div className="flex flex-row flex-1 gap-2 md:w-[350px] w-2/3 justify-between pt-4">
          <Button
            className="bg-[#838383] rounded-md md:w-[160px] w-6/12"
            value="Cancel"
            onClick={closePopup}
          />
          <Button
            className="bg-[#33B6FF] rounded-md md:w-[160px] w-6/12"
            value="Create"
          />
        </div>
      </div>
    </div>
  );
}

export default AddUsersPopup;
