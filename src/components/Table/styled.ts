import styled from "styled-components";

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  border-spacing: 0px 20px;
  thead tr, tbody tr{
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
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
    border-left: 1px solid #000;
    border-right: 1px solid #000;
  }
`;  

export const RowInfo = styled.tr`
  td {
  text-align: center;
  /* background: blues; */
  border-radius: 20px;
  color: #2196F3;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 28px;
  }
`;
