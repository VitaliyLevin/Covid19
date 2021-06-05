import React from 'react'
import { StyledInput } from './styled';

type PropsType = {
  type: string;
  onHandleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string
}

const Input = ({ type, onHandleInputChange, value, placeholder }: PropsType): JSX.Element => {
  return (
    <>
      <StyledInput
        type={type}
        onChange={onHandleInputChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
};

export default Input;
