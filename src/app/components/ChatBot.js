import React from 'react';
import withStyle from 'react-jss';
import MessageInputContainer from '../containers/MessageInputContainer';
import ChatContainer from '../containers/ChatContainer';

const style = {
    div: {
        display: 'block',
    },
    head: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        fill: '#fff',
        height: '56px',
        width: '100px',
        justifyContent: 'space-between',
        padding: '0 10px',
        margin : '0px auto'

    },
    chatBot: {
        marginTop : '2cm',
        margin: '0 auto',
        alignItems: 'mid',
    }
};

class ChatBot extends React.Component {
    render() {
        const {chatBot, div} = this.props.classes;
        return (
            <div>
                <div className={chatBot}>
                    <ChatContainer/>
                </div>
                <MessageInputContainer/>
            </div>
        );

    }
}

export default withStyle(style)(ChatBot);



