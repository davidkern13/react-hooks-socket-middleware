import { createStore, applyMiddleware } from 'redux';
import rootSaga from './saga';

import createSagaMiddleware from 'redux-saga';
import socketMiddleware from '../middleware/socket-middleware';
import rootReducer from './reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export function initialStore(){

    const middleware = [socketMiddleware, sagaMiddleware];

    const store = createStore(
      rootReducer,
      applyMiddleware(...middleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
