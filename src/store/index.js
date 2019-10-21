import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// Config Reactototron Redux/Redux-Saga

const sagaMidleware = createSagaMiddleware();

const enhacer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMidleware)
      )
    : applyMiddleware(sagaMidleware);

const store = createStore(rootReducer, enhacer);

sagaMidleware.run(rootSaga);

export default store;
