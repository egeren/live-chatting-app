import { ContactBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
  flex
  flex-col
  transition-all
  pb-4
`;

export const ChatCategory = styled.h2`
  text-white 
  font-primary
  flex
  items-center
  ${(p: ContactBarProps) =>
    p.expanded
      ? `
      xl:h-12
      h-7
      xl:py-4
      lg:py-3
      md:py-2
      sm:py-1
      py-1`
      : `
      y-0
      h-0 
      text-[0px] 
      opacity-0
  `}	
  
  truncate
  transition-all
  
  sm:px-4
  px-2

  lg:text-base
  md:text-sm
  sm:text-xs
  text-xs
 
`;
