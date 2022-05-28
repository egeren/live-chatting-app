import React, { useState, useEffect, Children } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { CheckboxContainer } from './styled';

interface CheckboxProps {
  checked?: boolean;
}

function Checkbox(props: CheckboxProps) {
  const { checked } = props;
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleClick = () => {
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    setIsChecked(checked || false);
  }, [checked]);
  return (
    <div className="checkbox-wrapper" onClick={handleClick}>
      <CheckboxContainer checked={isChecked}>
        {isChecked && <IoCheckmark className="text-white w-full h-full" />}
      </CheckboxContainer>
    </div>
  );
}

export default Checkbox;
