import React from 'react';
import { TextInput } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoSearch } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (text: string) => void;
}
function SearchBar(props: SearchBarProps) {
  const { onSearch } = props;

  return (
    <div className="flex justify-center w-full h-full">
      <TextInput
        className="chat-search-textbox w-full h-9 bg-primary-300 rounded-sm text-white xl:text-base md:text-sm sm:text-xs text-xs"
        placeholder="Search users or chat rooms"
        onChange={(e) => onSearch(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />

      <IoSearch className="search-icon text-2xl text-white" />
    </div>
  );
}

export default SearchBar;
