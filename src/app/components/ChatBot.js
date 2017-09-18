import React from 'react';
import withStyle from 'react-jss';
import MessageInputContainer from '../containers/MessageInputContainer';
import ChatContainer from '../containers/ChatContainer';

const style = {
    head: {
        background: '#6e48aa',
        height: '56px',
        color: '#ffffff',
        fontSize :'xx-large'
    },
    chatBot:{
        textAlign: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'block',
        background: '#f5f8fb',
        borderRadius: '10px',
        boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.15)',
        fontFamily: 'monospace',
        overflow: 'hidden',
        position: 'relative',
        zIndex: '999',
        transform :'scale(1)',
        transition: 'transform .3s ease',
        fontSize: 'x-large',
        marginTop: '30px'
    }
};

class ChatBot extends React.Component {
    render() {
        const {chatBot,head} = this.props.classes;
        return (
            <div className={chatBot}>
                <div className={head}>Chatbot Projekt</div>
                <ChatContainer/>
                <MessageInputContainer/>
            </div>
        );

    }
}

export default withStyle(style)(ChatBot);



