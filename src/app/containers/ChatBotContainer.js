import React from 'react';

import MessageInputContainer from './MessageInputContainer';
import MessageContainer from './MessageContainer';
import Chat from '../components/Chat';
const ChatBotContainer = () => {
    return <div>
        <Chat/>
        <MessageContainer/>
        <MessageInputContainer/>
    </div>
};

export default ChatBotContainer;


