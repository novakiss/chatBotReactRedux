import React from 'react';

import {SYMPTOM_STEP,QUESTION_STEP} from '../constants';

import Message from '../../message/Messages'


import SymptonInputContainer from '../containers/SymptomInputContainer';
import QuestionContainer from '../containers/QuestionContainer';


const ChatBotStepElement = ({currentStep}) =>{
    switch (currentStep){
        case SYMPTOM_STEP:
            return <SymptonInputContainer/>;
        case QUESTION_STEP:
            return <QuestionContainer/>;
        default:
            return  <div> Unknown CurrentStep {currentStep}</div>;
    }
};

const ChatBot =({currentStep}) =>{
    return (<div>
        <Message />
        <ChatBotStepElement currentStep={currentStep}/>
    </div>);
};

export default ChatBot;