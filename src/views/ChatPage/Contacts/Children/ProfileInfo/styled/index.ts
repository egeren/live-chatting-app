import { ContactBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';

export const Container = styled.div`
  profile-info-container
  w-full
  flex
  flex-row
  items-center
  transition-all
  
  xl:gap-4
  lg:gap-3
  md:gap-2
  sm:gap-2
  gap-2
  
  lg:px-4
  md:px-[15px]
  sm:px-[10px]
  px-[8px]

  md:py-4
  py-2
 `;

export const IconsContainer = styled.div`
 icons-container flex flex-1 flex-row gap-3 items-center justify-end
 xl:text-2xl lg:text-xl md:text-lg sm:text-base text-base
  `;
