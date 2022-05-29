import React, { useState, useEffect } from 'react';
import { IPopupContentProps } from 'helpers/interfaces/components';
import { IoClose } from 'react-icons/io5';
import { Button, List, ProfilePhoto, TextInput } from 'components';
import Member from 'views/ChatPage/RoomDetails/Children/Member/Member';

function AddUsersPopup(props: IPopupContentProps) {
  const { closePopup } = props;

  return (
    <div className="relative flex flex-col flex-shrink room-create-popup bg-primary-100  md:w-5/12 max-h-[85vh] h-full w-11/12 rounded-md">
      <IoClose
        onClick={closePopup}
        className="absolute right-4 top-4 text-white md:text-3xl text-xl p-[2px] box-content cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full"
      />
      <div className="flex flex-row w-full title-container text-white pt-8">
        <h1 className="w-full font-primary text-white text-center md:text-4xl sm:text-xl text-xl">
          Add Users to Test Room
        </h1>
      </div>
      <div className="flex flex-1 overflow-hidden  items-start justify-center user-list-wrapper mt-10 ">
        <div className="user-list-container bg-primary-200 flex flex-col self-stretch lg:w-7/12 w-10/12 rounded-sm overflow-y-scroll">
          <List>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
            <List.Item checkable>
              <Member expanded />
            </List.Item>
          </List>
        </div>
      </div>
      <div className="flex flex-col items-center py-8 ">
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
