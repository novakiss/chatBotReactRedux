import React from 'react';

import '../App.css';
import ChatBot  from './modules/chatBot/containers/ChatBotContainer';
import {
    Route,
    Switch as RouterSwitch
} from 'react-router-dom';

const App =()=> (
    <RouterSwitch>
        <Route path="/chatbot" exact component={ChatBot}/>
    </RouterSwitch>
);

export default App;
