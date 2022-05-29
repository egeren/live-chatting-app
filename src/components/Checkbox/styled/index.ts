import styled from 'tailwind-styled-components';

export const CheckboxContainer = styled.div`
  checkbox 
  flex
  items-center
  justify-center
  w-7 
  h-7 
  rounded-sm
  ${(p: { $checked: boolean }) =>
    p.$checked ? 'bg-[#262525]' : 'bg-[#565656]'} 
  ${(p: { $checked: boolean }) =>
    p.$checked ? 'hover:bg-[#292929]' : 'hover:bg-[#505050]'} 
  
   
  cursor-pointer
`;
