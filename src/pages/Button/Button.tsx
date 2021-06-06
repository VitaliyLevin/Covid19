import React from 'react'
import { StyledButton } from './styled';

type PropsType = {
  children: string;
  onClearSelectedCountry: () => void;
}

const Button = ({children, onClearSelectedCountry}: PropsType): JSX.Element => {
  return (
    <StyledButton onClick={onClearSelectedCountry}>
      {children}
    </StyledButton>
  )
};

export default Button;
