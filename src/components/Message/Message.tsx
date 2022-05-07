import ProfilePhoto from 'components/ProfilePhoto/ProfilePhoto';
import React from 'react';

function Message() {
  return (
    <div className=" flex flex-row py-2">
      <div className="flex">
        <ProfilePhoto className="md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10" />
      </div>
      <div className="flex flex-col justify-center font-primary text-white pl-3">
        <h3 className="md:text-xl sm:text-base text-sm font-semibold">
          Jane Smith
          <span className="md:text-sm sm:text-xs text-[10px] font-light ml-2">
            14:43 AM
          </span>
        </h3>
        <p className="md:text-lg sm:text-sm text-xs">hi everyone!! im new</p>
      </div>
    </div>
  );
}

export default Message;
