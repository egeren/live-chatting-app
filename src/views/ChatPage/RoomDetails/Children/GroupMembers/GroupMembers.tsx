import React, { useState, useEffect } from 'react';
import Member from '../Member/Member';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';

function GroupMembers(props: RoomDetailsBarProps) {
  return (
    <div className="absolute w-full flex flex-col max-h-full gap-3 overflow-y-scroll overflow-x-hidden pb-4 ">
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
      <Member {...props} />
    </div>
  );
}

export default GroupMembers;
