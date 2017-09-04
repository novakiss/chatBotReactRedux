import {combineReducers} from 'redux';

import step from './modules/chatBot/reducers/step';
import message from './modules/chatBot/reducers/message'
import fetchData from './modules/chatBot/reducers/fetchData';



const state =combineReducers({
    step, message, fetchData
});

export default combineReducers({
    state
})