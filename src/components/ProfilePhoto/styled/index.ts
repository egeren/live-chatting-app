import styled from 'tailwind-styled-components';

export const Container = styled.div`
    profile-photo-container
    flex
    items-center
    justify-center
    w-72
    h-72
    rounded-full
    bg-gradient-to-r 
    from-cyan-500 
    to-blue-500
    overflow-hidden
    relative
    ${(p: { $editable: boolean }) => (p.$editable ? 'group' : '')}
    ${(props: { styles: string }) => props.styles}
`;

export const UploadImageContainer = styled.div`
    absolute 
    w-full 
    h-full 
    group-hover:flex 
    items-center 
    justify-center 
    cursor-pointer
    hidden
    bg-black 
    bg-opacity-70
`;
