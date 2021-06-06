import styled from "styled-components";

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  color: white;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  h2 {
    margin: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin-bottom: 38px;
  }
`;

export const Info = styled.table`
  width: 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #666666;
  td {
    padding-bottom: 30px;
  }
  td:last-child {
    text-align: right;
  }
  tr:last-child td:first-child {
    padding-left: 6px;
  }
  tr:last-child td {
    padding-bottom: 38px !important;
  }
`;
