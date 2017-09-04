import React from 'react';
import {connect} from 'react-redux';


import {stateSelector} from '../selectors';
import {ANSWER_STEP} from '../constants';
import MessageInput from '../components/MessageInput';

import {changeStep, getResponseFromServer as getResponseFromServerAction} from '../action';

const MessageInputContainer = (currentStep, send) =>{
    const disable = true;
    if (currentStep !== ANSWER_STEP) {
        return <MessageInput disable={!disable} send = {send}/>
    }
    return <MessageInput disable = {disable}/>
};

const mapStateToProps = (state) => {
    const {currentStep} = stateSelector(state);
    return {currentStep}
};

const mapDispatchToProps = {
    send : getResponseFromServerAction,
    //changeStep : changeStepAction
};

export default connect(mapStateToProps,mapDispatchToProps) (MessageInputContainer)