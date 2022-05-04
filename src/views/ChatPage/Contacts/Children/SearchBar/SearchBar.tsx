import React from 'react';
import { TextInput } from 'components';
import { ContactBarProps } from 'helpers/interfaces/store';
import { IoSearch } from 'react-icons/io5';

function SearchBar(props: ContactBarProps) {
  const { expanded } = props;

  if (expanded) {
    return (
      <TextInput
        className="w-full h-9 bg-primary-300 rounded-sm text-white xl:text-base md:text-sm sm:text-xs text-xs"
        placeholder="Search users or chat rooms"
      />
    );
  } else {
    return <IoSearch className="text-2xl text-white" />;
  }
}

export default SearchBar;
