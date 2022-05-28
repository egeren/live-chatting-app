import React, { useState, useEffect } from 'react';
import { IconType } from 'react-icons';
import { IoAccessibility } from 'react-icons/io5';
import { ButtonStyled, Container } from './stlyed';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  className?: string;
  icon?: IconType;
}

function Button(props: IButtonProps) {
  const { value, icon, className, ...rest } = props;
  return (
    <Container $className={className}>
      <ButtonStyled {...rest}>
        <p className="flex flex-shrink-0 text-center">{value}</p>
        {icon && (
          <div className="icon-container">
            {React.createElement(icon, { className: 'w-full h-full text-2xl' })}
          </div>
        )}
      </ButtonStyled>
    </Container>
  );
}

export default Button;
