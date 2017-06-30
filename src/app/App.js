import React from 'react';

import '../App.css';
import Message  from './modules/message/Messages';
import ChatBot  from './modules/chatBot/containers/ChatBotContainer';

import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

const App =()=> (
    <RouterSwitch>
        <Route path="/message" exact component={Message}/>
        <Route path="/chatbot" exact component={ChatBot}/>
    </RouterSwitch>
);

export default App;
