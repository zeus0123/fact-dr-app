import React from 'react'
import { StyledButton } from './Button.styles';

const Button = ({ fontSize, onClick, children }) => {
  return (
    <StyledButton fontSize={fontSize} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;
