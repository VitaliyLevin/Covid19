import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 72px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;

`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  height: 80px;
  padding: 12px 24px 12px 32px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  input[type="search"] {
    border: none;
    outline: none; 
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    margin-right: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
   }
`;