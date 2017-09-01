import {combineReducers} from 'redux';

import chatBot from './modules/chatBot/reducer';


const modules =combineReducers({
    chatBot
});

export default combineReducers({
    modules
})