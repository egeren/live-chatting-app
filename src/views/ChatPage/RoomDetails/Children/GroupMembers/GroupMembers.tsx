import React, { useState, useEffect, useMemo } from 'react';
import Member from '../Member/Member';
import { RoomDetailsBarProps } from 'helpers/interfaces/store';
import { IUserDataStore } from 'redux/user/UserSlice';
import { v4 as uuid } from 'uuid';

interface IGroupMembersProps {
  members: IUserDataStore[];
}
function GroupMembers(props: IGroupMembersProps) {
  const { members } = props;
  const MembersToRender = members.map((member, index) => {
    return <Member member={member} key={index} />;
  });

  return (
    <div className="group-members-container min-w-[35px] absolute w-full flex flex-col max-h-full gap-3 overflow-y-scroll overflow-x-hidden pb-4">
      {MembersToRender}
    </div>
  );
}

export default React.memo(GroupMembers);
