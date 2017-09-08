import React from 'react';
import withStyle from 'react-jss';
import MessageInputContainer from '../containers/MessageInputContainer';
import ChatContainer from '../containers/ChatContainer';

const style = {
    div:{
        display:'block',
    },
    head :{
      alignItems:'center',
        background:'blue',
        color: '#fff',
        display:'flex',
        fill : '#fff',
        height:'56px',
        width: '100px',
        justifyContent:'space-between',
        padding:'0 10px',
    },
    chatBot: {
        margin: '0px auto',
        alignItems: 'mid',
    }
};

class ChatBot extends React.Component{
    render(){
        const {chatBot,div,head} = this.props.classes;
        return  (
            <div>
            <div className={head}> Chat bot</div>
            <div className={chatBot}>
            <ChatContainer/>
            </div>
            <MessageInputContainer/>
        </div>
        );

    }
}

export default withStyle(style)(ChatBot);



