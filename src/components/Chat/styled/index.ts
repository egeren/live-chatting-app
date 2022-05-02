import styled from 'tailwind-styled-components';

export const Container = styled.div`
  chat-component-container
  flex
  flex-1
  flex-row
  items-center
hover:bg-[#545454]
  cursor-pointer
  transition-all
  py-4
  gap-2
  
  lg:px-4
  md:px-[18px]
  sm:px-[12px]
  px-[5px]
`;

export const ChatImageContainer = styled.div`
  flex
  flex-shrink-0
  rounded-xl
  overflow-hidden
  
  lg:w-[50px] 
  lg:h-[50px] 
  md:w-[45px]
  md:h-[45px]
  sm:w-[45px]
  sm:h-[45px]
  w-[40px]
  h-[40px]
`;
