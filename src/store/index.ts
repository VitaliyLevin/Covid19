import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer/country';
import { watchFetchCountris } from './sagas/country';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(watchFetchCountris);