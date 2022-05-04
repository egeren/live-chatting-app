import { ContactBarProps } from 'helpers/interfaces/store';
import styled from 'tailwind-styled-components';
export const Container = styled.div`
  contacts-container
  flex
  flex-col
  xl:w-[350px]
  lg:w-[300px]
  lg:relative
  absolute
  top-0
  left-0
  ${(p: ContactBarProps) =>
    p.expanded
      ? 'md:w-[250px] sm:w-[230px] w-[200px]'
      : 'md:w-[80px] sm:w-[70px] w-[50px]'}
  h-full
  pb-3
  bg-primary-200
  transition-all
  overflow-hidde
  z-40
`;
