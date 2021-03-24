import React from 'react'
import Button from '../Button/Button';
import { NavBarWrapper } from './NavBar.styles';

const NavBar = ({ handleClick }) => {
  return (
    <NavBarWrapper>
      <Button onClick={handleClick}>
        View Cart
      </Button>
    </NavBarWrapper>
  )
}

export default NavBar;
