import styled from "styled-components";

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  border-spacing: 0px 20px;
  tr{
    height: 80px;
    background: #2196F3;
    color: #fff;
    text-align: left;
  }
  tbody tr {
    background: #fff;
    color: #000;
  }
  th, td {
    padding-left: 23px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25) !important;
  }
  td, th:nth-child(n+2) {
    cursor: pointer;
  }
  th:first-child, td:first-child {
    width: 78px;
    border-radius: 20px 0 0 20px;
    text-align: center;
    padding-left: 0;
  }
  th:last-child, td:last-child{
    border-radius: 0 20px 20px 0;
    width: 560px;
  }
  th:nth-child(2) {
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
  }
  td:nth-child(2) {
    border-left: 1px solid #B2B2B2;
    border-right: 1px solid #B2B2B2;
  }
`;  

export const RowInfo = styled.tr`
  td {
  text-align: center;
  border-radius: 20px !important;
  color: #2196F3;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 28px;
  }
`;
