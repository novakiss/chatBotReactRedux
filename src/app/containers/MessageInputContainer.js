import React from 'react';
import {connect} from 'react-redux';

import {stepSelector,fetchDataSelector} from '../selectors';
import {ANSWER_STEP} from '../constants';
import MessageInput from '../components/MessageInput';

import {
    getUserMessage as getUserMessageAction,
    changeStepToQuestionStep as changeStepToQuestionStepAction,
    getResponseFromServer as getResponseFromServerAction
} from '../action';

const MessageInputContainer = ({currentStep, send, message, changeStep,response}) => {
    if((!response.noQuestion || response.noQuestion ===null)&& currentStep ===ANSWER_STEP){
        return <MessageInput disable={false} sendToServer={send} changeStep={changeStep}
                             sendToMessageContainer={message}/>

    }
    return <MessageInput disable={true} />
};

const mapStateToProps = (state) => {
    const {currentStep} = stepSelector(state);
    const {response} = fetchDataSelector(state);
    return {currentStep, response};
};

const mapDispatchToProps = {
    send: getResponseFromServerAction,
    changeStep: changeStepToQuestionStepAction,
    message: getUserMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputContainer)