import styled from 'tailwind-styled-components';

export const Container = styled.div`
    flex
  ${(props: { $iconPosition: 'left' | 'right' }) =>
    props.$iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row'}
    items-center
    justify-center
    font-primary
    overflow-hidden
    px-2
    bg-white
    text-black
    ${(props: { styles: string }) => props.styles}
`;

export const IconContainer = styled.div`
    flex
    text-3xl
    text-black
    ${(props: { styles: string }) => props.styles}
`;
