import Checkbox from 'components/Checkbox';
import React, { useState, useEffect } from 'react';
import Member from 'views/ChatPage/RoomDetails/Children/Member/Member';

interface ListProps {
  children: React.ReactNode;
}
function List(props: ListProps) {
  const { children } = props;
  return <div className="list-wrapper">{children}</div>;
}

interface ListItemProps {
  checkable?: boolean;
  children: React.ReactNode;
}

const Item = (props: ListItemProps) => {
  const { checkable, children } = props;
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div
      className="item-container select-none hover:bg-primary-300 py-3 px-5 flex gap-4 w-full h-fit items-center cursor-pointer"
      onClick={handleClick}
    >
      {checkable && <Checkbox checked={isChecked} />}
      {children}
    </div>
  );
};

List.Item = Item;

export default List;
