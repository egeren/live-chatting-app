import React, { useEffect, useRef } from 'react';
import Avatar from './Avatar';

interface AvatarGroupProps {
  children: JSX.Element[];
}

function AvatarGroup(props: AvatarGroupProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (e: WheelEvent) => {
    if (ref.current && e.deltaX != 0) {
      return;
    }

    if (ref.current && e.deltaY > 0) {
      ref.current.scroll(ref.current.scrollLeft + 10, 0);
    } else if (ref.current && e.deltaY < 0) {
      ref.current.scroll(ref.current.scrollLeft - 10, 0);
    }
  };

  useEffect(() => {
    ref.current ? ref.current.addEventListener('wheel', handleScroll) : null;
    return () => {
      ref.current
        ? ref.current.removeEventListener('wheel', handleScroll)
        : null;
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex h-full no-scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full"
    >
      {children}
    </div>
  );
}

AvatarGroup.Avatar = Avatar;
export default AvatarGroup;
