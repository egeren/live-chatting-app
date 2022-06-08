import Checkbox from 'components/Checkbox';
import React, { useState, useEffect, createContext, useContext } from 'react';
import Member from 'views/ChatPage/RoomDetails/Children/Member/Member';

interface ListProps {
  children: React.ReactNode;
  onChange: (selectedItems: any) => void;
}

interface IListContext {
  selectedItems: any[];
  setSelectedItems: React.Dispatch<React.SetStateAction<{ id: string }[]>>;
}
const ListContext = createContext<IListContext | undefined>(undefined);

function List(props: ListProps) {
  const { children, onChange } = props;
  const [selectedItems, setSelectedItems] = useState([] as any);
  useEffect(() => {
    onChange(selectedItems);
  }, [selectedItems]);
  return (
    <ListContext.Provider value={{ selectedItems, setSelectedItems }}>
      <div className="list-wrapper">{children}</div>
    </ListContext.Provider>
  );
}

interface ListItemProps {
  checkable?: boolean;
  children: React.ReactNode;
  itemData: { id: string };
}

const Item = (props: ListItemProps) => {
  const { checkable, children, itemData } = props;
  const [isChecked, setIsChecked] = useState(false);
  const { selectedItems, setSelectedItems } = useContext(ListContext)!;

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    if (isChecked) {
      setSelectedItems((prev) => [...prev, itemData]);
    } else {
      setSelectedItems((prev) =>
        prev.filter((item) => item.id !== itemData.id)
      );
    }
  }, [isChecked]);
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
