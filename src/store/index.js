import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// Config Reactototron Redux
const enhacer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const store = createStore(rootReducer, enhacer);

export default store;
