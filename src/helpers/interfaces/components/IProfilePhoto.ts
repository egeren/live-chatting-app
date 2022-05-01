import React from 'react';

export interface ProfilePhotoProps {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>['className'];
  editable?: boolean;
  photo?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
