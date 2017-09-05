import React from 'react';
import {connect} from 'react-redux';

import {stepSelector} from '../selectors';
import {ANSWER_STEP} from '../constants';
import MessageInput from '../components/MessageInput';

import {getUserMessage as getUserMessageAction,changeStepToQuestionStep as changeStepToQuestionStepAction, getResponseFromServer as getResponseFromServerAction} from '../action';

const MessageInputContainer = ({currentStep, send ,message,changeStep}) =>{
    const disable = true;
    if (currentStep === ANSWER_STEP) {
        return <MessageInput disable= {!disable} sendToServer = {send} changeStep ={changeStep} sendMessage={message}/>
    }
    return <MessageInput disable = {disable} currentStep = {currentStep}/>
};

const mapStateToProps = (state) => {
    const {currentStep} = stepSelector(state);
    return {currentStep};
};

const mapDispatchToProps = {
    send : getResponseFromServerAction,
    changeStep : changeStepToQuestionStepAction,
    message : getUserMessageAction,
};

export default connect(mapStateToProps,mapDispatchToProps) (MessageInputContainer)