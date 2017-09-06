import React from 'react';

import MessageContainer from '../containers/MessageContainer';

const Chat = () => {
    return (
        <div style={style}>
            <MessageContainer/>
        </div>)
};



const style = {
    marginleft: 'auto',
    marginright: 'auto',
    background: 'white',
    width: '300px',
    height: '300px',
    overflow: 'scroll',
};

export default Chat;