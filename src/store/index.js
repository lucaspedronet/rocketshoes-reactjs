import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddlware from 'redux-saga';

/**
 * roots de reducers e sagas
 */
import rootReducers from './modules/rootReducers';
import rootSagas from './modules/rootSagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

/**
 * @interceptions: Middleware de sagas
 */
const sagaMiddleware = createSagaMiddlware({ sagaMonitor });

/**
 * compose() faz a combinação das functions createEnhancer e applyMiddleware
 */
const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(sagaMiddleware))
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducers, enhancer);

/**
 * execução da middleware com params que
 */
sagaMiddleware.run(rootSagas);

export default store;
