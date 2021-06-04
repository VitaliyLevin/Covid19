import React from 'react'

type PropsType = {
  type: string;
  onHandleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string
}

const Input = ({ type, onHandleInputChange, value, placeholder }: PropsType): JSX.Element => {
  return (
    <>
      <input
        type={type}
        onChange={onHandleInputChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
};

export default Input;
