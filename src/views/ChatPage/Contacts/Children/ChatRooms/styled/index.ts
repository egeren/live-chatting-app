import { ContactBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
  flex
  flex-col
  transition-all
  pb-4
`;

export const ChatCategory = styled.h2`
  chat-category-title
  text-white 
  font-primary
  flex
  items-center
  
  truncate
  transition-all
  
  sm:px-4
  px-2

  lg:text-base
  md:text-sm
  sm:text-xs
  text-xs
 
`;
