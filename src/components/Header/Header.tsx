import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.svg';
import search from '../../assets/imgs/search.svg';
import Input from '../../pages/Input';
import { StyledHeader, SearchWrapper, LogoWrapper } from './styled'

const Header = (): JSX.Element => {
  const [value, setValue] = useState('')
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setValue(value)
  }
  console.log(value)
  return (
    <StyledHeader>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h1>STATISTIC</h1>
      </LogoWrapper>
      <SearchWrapper>
        <Input
          type='search'
          onHandleInputChange={onHandleInputChange}
          value={value}
          placeholder="Search"
        />
        <img src={search} alt="magnifying glass picture" />
      </SearchWrapper>
    </StyledHeader>
  )
}

export default Header;
