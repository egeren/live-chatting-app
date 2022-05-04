import React, { useState, useEffect, useRef } from 'react';
import Avatar from './Avatar';

interface AvatarGroupProps {
  children: JSX.Element;
}

function AvatarGroup(props: AvatarGroupProps) {
  const { children } = props;
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = (e: WheelEvent) => {
    if (ref.current && e.deltaY > 0) {
      ref.current.scrollLeft += 100;
    } else if (ref.current && e.deltaY < 0) {
      ref.current.scrollLeft -= 100;
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
      className="h-full no-scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full"
    >
      {children}
    </div>
  );
}

AvatarGroup.Avatar = Avatar;
export default AvatarGroup;
