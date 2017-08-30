import {combineReducers} from 'redux';

import chatBot from './modules/chatBot/reducer';
import chatBotFinal from './modules/chatBotFinal/reducer';

const modules =combineReducers({
    chatBot, chatBotFinal
});

export default combineReducers({
    modules
})