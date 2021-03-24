import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducer';
import sagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;