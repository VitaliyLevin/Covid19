import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer/country';
import { watchFetchCountris } from './sagas/country';

//eslint-disable-next-line @typescript-eslint/no-explicit-any
const reduxDevTools =(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));
sagaMiddleware.run(watchFetchCountris);


//for Safary
// const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run(watchFetchCountris);