import styled from "styled-components";

export const StyledInput = styled.input`
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
  ::-webkit-search-cancel-button {
    cursor: pointer;
    filter: invert(0%) sepia(4%) saturate(0%) hue-rotate(337deg) brightness(100%) contrast(107%);
    height: 10px;
    width: 10px;
   }
`