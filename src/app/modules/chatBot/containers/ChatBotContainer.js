import React from 'react';

import {connect} from 'react-redux';
import {stateSelector} from '../selectors';

class ChatBotContainer extends React.Component{
    render(){
        return (
            <div>Hello</div>
        )
    }
}

const mapStateToProps =  state =>{
  const {currentStep} = stateSelector(state);
  console.log(currentStep);
  return {currentStep};
};

export default connect(mapStateToProps)(ChatBotContainer);