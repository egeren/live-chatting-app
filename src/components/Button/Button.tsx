import React, { useState, useEffect } from 'react';
import { ButtonStyled, Container } from './stlyed';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  className?: string;
}

function Button(props: IButtonProps) {
  const { value, className, ...rest } = props;
  return (
    <Container $className={className}>
      <ButtonStyled {...rest}>{value}</ButtonStyled>
    </Container>
  );
}

export default Button;
