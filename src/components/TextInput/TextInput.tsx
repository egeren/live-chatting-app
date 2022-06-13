import React, { useState } from 'react';
import { TextInputProps } from 'helpers/interfaces/components';
import { Container, IconContainer } from './styled';

function TextInput(props: TextInputProps) {
  const [text, setText] = useState('');
  const {
    value,
    placeholder,
    className,
    icon,
    iconClass,
    iconPosition,
    onSend,
    onChange,
    onClick,
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (onChange) onChange(e);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSend) {
      onSend(text);
    }
  };

  const handleIconClick = () => {
    if (onSend) {
      onSend(text);
    }
  };
  return (
    <Container styles={className} $iconPosition={iconPosition}>
      {icon && (
        <div onClick={handleIconClick}>
          <IconContainer styles={iconClass}>{icon}</IconContainer>
        </div>
      )}
      <input
        type="text"
        className="w-full h-full outline-none pl-1 truncate bg-transparent"
        placeholder={placeholder}
        onKeyUp={handleKeyPress}
        onChange={handleOnChange}
        onClick={onClick}
        value={value}
      />
    </Container>
  );
}

export default TextInput;
