import React from 'react';
import {connect} from 'react-redux';

import {selectChatBot} from '../selectors';

import ChatBot from '../components/ChatBot';

class ChatBotContainer extends React.Component{
    render(){
        return <ChatBot {...this.props}/>
    }
}

const mapStateToProps = state => {
  const { currentStep,stepDone} =selectChatBot(state);
  return {
      currentStep, stepDone
  }
};

export default connect(mapStateToProps)(ChatBot);


