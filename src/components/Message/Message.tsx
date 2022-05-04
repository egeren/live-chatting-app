import ProfilePhoto from 'components/ProfilePhoto/ProfilePhoto';
import React, { useState, useEffect } from 'react';

function Message() {
  return (
    <div className=" flex flex-row py-2">
      <div className="flex">
        <ProfilePhoto className="md:w-16 md:h-16 w-14 h-14" />
      </div>
      <div className="flex flex-col justify-center font-primary text-white pl-3">
        <h3 className="md:text-xl text-lg font-semibold">
          Jane Smith
          <span className="md:text-sm text-xs font-light ml-2">14:43 AM</span>
        </h3>
        <p className="md:text-lg text-base">hi everyone!! im new</p>
      </div>
    </div>
  );
}

export default Message;
