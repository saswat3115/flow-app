import { createStore, compose } from 'redux';
import flowReducer from './flow-reducer/reducer';
// import nodeReducer from './node-reducer/reducer';
import { combineReducers } from 'redux';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    flows: flowReducer,
    // nodes: nodeReducer
});

export const store = createStore(
    rootReducers,
    composeEnhancers(),
);