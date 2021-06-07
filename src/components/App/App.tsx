import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Table from '../Table';
import { requestCountries, State } from '../../store/reducer/country';
import { AppWrapper, ContentWrapper } from './styled';
import ModalCountry from '../Modal/ModalCountry';
import CardCountryInfo from '../CardCountryInfo';

const App = (): JSX.Element => {
  const { selectedCountry } = useSelector((state: State) => state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCountries())
  }, [])
  return (
    <AppWrapper>
      {
        selectedCountry
        &&
        <ModalCountry>
          <CardCountryInfo />
        </ModalCountry>
      }
      <ContentWrapper>
        <Header />
        <Table />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
