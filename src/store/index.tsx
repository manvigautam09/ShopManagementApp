import logger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';

import rootReducer from './reducers';

const middleWare = applyMiddleware(logger);

export const store = createStore(rootReducer, middleWare);
