import {combineReducers,createStore}  from 'redux';

import appReducer from './app/reducer';

const reducer = combineReducers({app : appReducer });

export const store = createStore(
    reducer,window.STATE_FROM_SERVER
);