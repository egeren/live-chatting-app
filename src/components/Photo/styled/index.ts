import styled from 'tailwind-styled-components';

export const Container = styled.div`
    group
    profile-photo-container
    flex
    items-center
    justify-center
    w-full
    h-full
    rounded-full
    bg-gradient-to-r 
    from-purple-500 to-pink-400
    from-orange-500 to-red-500
    from-blue-500 to-purple-500
    from-purple-800 to-pink-500
    from-green-400 to-green-600
    from-red-600 to-red-500
    from-orange-600 to-orange-500
    from-cyan-700 to-sky-600
    from-pink-500 to-pink-400
    from-cyan-500 to-blue-500
    overflow-hidden
    relative
    ${(p: { $gradient: string }) => p.$gradient}
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
