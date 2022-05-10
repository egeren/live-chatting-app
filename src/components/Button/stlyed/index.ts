import styled from 'tailwind-styled-components';
import { IButtonProps } from '../Button';

interface ContainerProps {
  $className?: string;
}
export const Container = styled.div<ContainerProps>`
bg-primary-300
text-white
  font-primary
  font-extrabold
  hover:bg-opacity-80
  active:bg-opacity-60
  
  ${(p: ContainerProps) =>
    p.$className && p.$className?.length > 0 ? p.$className : ''}
`;
export const ButtonStyled = styled.button`
  w-full
  h-full
  px-2
  py-2
  font-medium
`;
