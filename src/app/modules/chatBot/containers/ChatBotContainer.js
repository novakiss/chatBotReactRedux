import React from 'react';
import {connect} from 'react-redux';

import {selectStep} from '../selectors';

import ChatBot from '../components/ChatBot';

class ChatBotContainer extends React.Component{
    render(){
        return <ChatBot {...this.props}/>
    }
}

const mapStateToProps = state => {
  const { currentStep,stepDone} =selectStep(state);
  return {
      currentStep, stepDone
  }
};

export default connect(mapStateToProps)(ChatBotContainer);


