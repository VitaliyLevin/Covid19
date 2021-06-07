import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearSelectedCountry, State } from '../../store/reducer/country';
import { CardInfo, CardWrapper, Info } from './styled';
import heartbeat from '../../assets/imgs/heartbeat.svg';
import skull from '../../assets/imgs/skull.svg';
import filemedical from '../../assets/imgs/filemedical.svg';
import Button from '../Button';

const CardCountryInfo = (): JSX.Element => {
  const { selectedCountry } = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const onClearSelectedCountry = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch(clearSelectedCountry())
  }
  return (
    <CardInfo>
      <CardWrapper>
        <h2>{selectedCountry?.Country}</h2>
        <Info>
          <tbody>
            <tr>
              <td><img src={heartbeat} alt="heartbeat icon" /></td>
              <td>Total Confirmed</td>
              <td>{selectedCountry?.TotalConfirmed}</td>
            </tr>
            <tr>
              <td><img src={skull} alt="skull icon" /></td>
              <td>Total Deaths</td>
              <td>{selectedCountry?.TotalDeaths}</td>
            </tr>
            <tr>
              <td><img src={filemedical} alt="medical file icon" /></td>
              <td>Total Recovered</td>
              <td>{selectedCountry?.TotalRecovered}</td>
            </tr>
          </tbody>
        </Info>
        <Button onClearSelectedCountry={onClearSelectedCountry}>OK</Button>
      </CardWrapper>
    </CardInfo>
  )
};

export default CardCountryInfo;
