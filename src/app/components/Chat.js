import React from 'react';

import MessageContainer from '../containers/MessageContainer';

class Chat extends React.Component{
    render(){
        return (
            <div style={style}>
                {this.props.ids.map(id => <MessageContainer key={id} id ={id}/>)}
            </div>)
    }
}

const style = {
    alignItems: 'mid',
    margin : '0px auto',
    background: '#e5e5e5',
    width: '300px',
    height: '300px',
    overflow: 'scroll',
};

export default Chat;