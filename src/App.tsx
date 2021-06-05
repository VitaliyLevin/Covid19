import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import { requestCountries } from './store/reducer/country';

const AppWrapper = styled.div`
 width: 1920px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin: 0 auto;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1800px;
`;

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCountries())
    // return () => {
    //   cleanup
    // }
  }, [])
  return (
    <AppWrapper>
      <ContentWrapper>
        <Header />
        <Table />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
