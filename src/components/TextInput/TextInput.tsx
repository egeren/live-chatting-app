import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'helpers/interfaces/components';
import { Container, IconContainer } from './styled';

function TextInput(props: TextInputProps) {
  const {
    placeholder,
    className,
    icon,
    iconClass,
    iconPosition,
    onSend,
    onChange,
    onClick,
  } = props;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSend) {
      onSend(e);
    }
  };
  return (
    <Container styles={className} $iconPosition={iconPosition}>
      {icon && <IconContainer styles={iconClass}>{icon}</IconContainer>}
      <input
        type="text"
        className="w-full h-full outline-none pl-1 truncate bg-transparent"
        placeholder={placeholder}
        onKeyUp={handleKeyPress}
        onChange={onChange}
        onClick={onClick}
      />
    </Container>
  );
}

export default TextInput;
