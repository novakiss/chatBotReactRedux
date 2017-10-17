import React from 'react';
import withStyle from 'react-jss';

import MessageInputContainer from '../containers/MessageInputContainer';
import ChatContainer from '../containers/ChatContainer';
import MedicsContainer from '../containers/MedicsContainer';

const style = {
    chatBot: {
        width: '75%',
        margin: '0 auto',
    },

    headChat: {
        background: '#3f51b5',
        height: '56px',
        color: '#ffffff',
        fontSize: 'xx-large'
    },

    headMedics: {
        background: '#3f51b5',
        height: '56px',
        color: '#ffffff',
        fontSize: 'x-large'
    },

    chat: {
        float: 'left',
        textAlign: 'center',
        width: '55%',
        display: 'block',
        background: '#f5f8fb',
        borderRadius: '10px',
        boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.15)',
        fontFamily: 'monospace',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '999',
        transform: 'scale(1)',
        transition: 'transform .3s ease',
        fontSize: 'x-large',
        marginTop: '30px'
    },

    medics: {
        float: 'right',
        textAlign: 'center',
        width: '40%',
        display: 'block',
        background: '#f5f8fb',
        borderRadius: '10px',
        boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.15)',
        fontFamily: 'monospace',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '999',
        transform: 'scale(1)',
        transition: 'transform .3s ease',
        fontSize: 'x-large',
        marginTop: '30px'
    }
};

export class ChatBot extends React.Component {
    render() {
        const {chatBot, chat, headChat, headMedics, medics} = this.props.classes;
        return (<div className={chatBot}>
                <div className={chat}>
                    <div className={headChat}>Chatbot Projekt</div>
                    <ChatContainer/>
                    <MessageInputContainer/>
                </div>
                <div className={medics}>
                    <div className={headMedics}>5 bestmögliches Medikamente</div>
                    <MedicsContainer/>
                </div>
            </div>
        );
    }
}

export default withStyle(style)(ChatBot);



