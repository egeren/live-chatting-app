import React from 'react';
import { IconType } from 'react-icons';
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
          <div className="icon-container h-8 w-8">
            {React.createElement(icon, { className: 'w-full h-full text-xl' })}
          </div>
        )}
      </ButtonStyled>
    </Container>
  );
}

export default Button;
