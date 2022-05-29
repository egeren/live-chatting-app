import React, { ReactElement } from 'react';

export interface TextInputProps {
  className?: React.HTMLAttributes<HTMLDivElement>['className'];
  placeholder?: string;
  icon?: ReactElement;
  iconClass?: React.HTMLAttributes<HTMLParagraphElement>['className'];
  iconPosition?: 'left' | 'right';
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSend?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
