import React  from 'react';
import {connect} from 'react-redux';
import {messageSelector} from '../selectors';
import MessageContainer from './MessageContainer';

const ChatContainer =(message ) =>{
    return <MessageContainer/>
};

const mapStateToProps =  (state,props) =>{
  const {message} = messageSelector(state).byID[props.id];
  return {message};
};

export default connect(mapStateToProps)(ChatContainer);