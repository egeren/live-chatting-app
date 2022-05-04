import React, { useState, useEffect } from 'react';
import { ProfilePhoto } from 'components';

interface AvatarProps {
  avatar: string;
}

function Avatar(props: AvatarProps) {
  const { avatar } = props;
  return (
    <div className="inline-flex">
      <ProfilePhoto className="w-14 h-14 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
      <ProfilePhoto className="w-14 h-14 -ml-4 border-4 border-primary-200" />
    </div>
  );
}

export default Avatar;
