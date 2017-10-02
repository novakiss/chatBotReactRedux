import React from 'react';
import {connect} from 'react-redux';

import {stepSelector, fetchDataSelector} from '../selectors';
import {ANSWER_STEP} from '../constants';
import MessageInput from '../components/MessageInput';

import {
    getUserMessage as getUserMessageAction,
    changeStepToQuestionStep as changeStepToQuestionStepAction,
    getResponseFromServer as getResponseFromServerAction
} from '../action';

export const MessageInputContainer = ({currentStep, getResponse, message, changeStep, response}) => {
    if ((!response.noQuestion || response.noQuestion === null) && currentStep === ANSWER_STEP) {
        if (response.questionType === 3) {
            return <MessageInput disable={true}/>
        }
        return <MessageInput disable={false} sendToServer={getResponse} changeStep={changeStep}
                             score={response.score} questionId={response.questionId} userId={response.userId}
                             count={response.count} questionType={response.questionType} question={response.question}
                             sendToMessageContainer={message}/>

    }
    return <MessageInput disable={true}/>
};

const mapStateToProps = (state) => {
    const {currentStep} = stepSelector(state);
    const {response} = fetchDataSelector(state);
    return {currentStep, response};
};

const mapDispatchToProps = {
    getResponse: getResponseFromServerAction,
    changeStep: changeStepToQuestionStepAction,
    message: getUserMessageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageInputContainer)