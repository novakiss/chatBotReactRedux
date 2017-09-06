import React  from 'react';
import {connect} from 'react-redux';
import {messageSelector} from '../selectors';

import Chat from '../components/Chat';

const ChatContainer =({message}) =>{
    return  <Chat message={message}/>
};


const mapStateToProps = (state) =>{
  const {message} = messageSelector(state);
  return {message};
};

export default connect(mapStateToProps)(ChatContainer);