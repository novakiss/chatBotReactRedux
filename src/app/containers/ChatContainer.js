import React  from 'react';
import {connect} from 'react-redux';
import {messageSelector} from '../selectors';

import Chat from '../components/Chat';

const ChatContainer =({chatIDs}) =>{
    chatIDs.map(i => console.log(i));
    return  <div>
        <Chat chatIDs = {chatIDs}/>
        </div>
};


const mapStateToProps = (state) =>{
  const {chatIDs} = messageSelector(state);
  return {chatIDs};
};

export default connect(mapStateToProps)(ChatContainer);