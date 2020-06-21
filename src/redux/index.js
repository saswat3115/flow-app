import { createStore, compose } from 'redux';
import flowReducer from './flow-reducer/reducer';
import authReducer from './auth-reducer/reducer';
import { combineReducers } from 'redux';

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
    flows: flowReducer,
    auth: authReducer
});

export const store = createStore(
    rootReducers,
    composeEnhancers(),
);