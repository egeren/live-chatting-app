import React from 'react';
import { Photo } from 'components';
import Tooltip from 'components/Tooltip';

interface AvatarProps {
  avatar: string;
  tooltipText: string;
  isFirst: boolean;
}

function Avatar(props: AvatarProps) {
  const { avatar, tooltipText, isFirst } = props;

  const classNames = isFirst ? 'inline-flex' : 'inline-flex -ml-4';

  return (
    <div className={classNames}>
      <Tooltip text={tooltipText}>
        <Photo
          editable={false}
          photo={avatar}
          className="w-14 h-14 border-4 border-primary-200"
        />
      </Tooltip>
    </div>
  );
}

export default Avatar;
