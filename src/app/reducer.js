import {combineReducers} from 'redux';

import step from './reducers/step';
import message from './reducers/message'
import fetchData from './reducers/fetchData';


const state = combineReducers({
    step, message, fetchData
});

export default combineReducers({
    state
});