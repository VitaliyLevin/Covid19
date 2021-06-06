import styled from "styled-components";

export const StyledButton = styled.button`
  width: 171px;
  height: 49px;
  background: #2196F3;
  border-radius: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  outline: none;
  border: none;
  cursor: pointer;
  &:active {
    border: 2px solid black;
  }
  &:hover {
    filter: brightness(105%);
  }
`;