import Photo from 'components/Photo/Photo';
import { useFindUser } from 'hooks/useFindUser';
import React from 'react';
import { IMessageData } from 'redux/rooms/RoomsSlice';
import { IUserDataStore } from 'redux/user/UserSlice';
import { DateTime } from 'luxon';

interface MessageProps {
  message: IMessageData;
}
function Message(props: MessageProps) {
  const { message } = props;

  const messageSender = useFindUser()(message.userId);
  if (!messageSender) return <></>;
  return (
    <div className="flex flex-row pt-3">
      <div className="flex">
        <Photo
          photo={messageSender.avatar}
          className="md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10"
        />
      </div>
      <div className="flex flex-col justify-center font-primary text-white pl-3">
        <h3 className="md:text-xl sm:text-base text-sm font-semibold">
          {messageSender.username}
          <span className="md:text-sm sm:text-xs text-[10px] font-light ml-2">
            {DateTime.fromISO(message.timestamp.toString()).toFormat('HH:mm a')}
          </span>
        </h3>
        <p className="md:text-lg sm:text-sm text-xs">{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
