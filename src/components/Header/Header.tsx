import React, { useState } from 'react';
import logo from '../../assets/imgs/logo.svg';
import search from '../../assets/imgs/search.svg';
import Input from '../../pages/Input';
import { StyledHeader, SearchWrapper, LogoWrapper } from './styled'

const Header = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('')
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target
    setInputValue(value)
  }
  console.log(inputValue)
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
          value={inputValue}
          placeholder="Search"
        />
        <img src={search} alt="magnifying glass picture" />
      </SearchWrapper>
    </StyledHeader>
  )
}

export default Header;
