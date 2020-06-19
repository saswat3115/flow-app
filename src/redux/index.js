import { createStore, compose } from 'redux';
import flowReducer from './flow-reducer/reducers';
import { combineReducers } from 'redux';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    flows: flowReducer,
});

export const store = createStore(
    rootReducers,
    composeEnhancers(),
);