import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { requestCountries } from './store/reducer/country';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCountries())
    // return () => {
    //   cleanup
    // }
  }, [])
  return (
    <div className="App">
    </div>
  );
}

export default App;
