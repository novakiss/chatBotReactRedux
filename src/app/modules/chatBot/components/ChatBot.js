import React from 'react';

import {SYMPTON_STEP,ANSWER_STEP,QUESTION_STEP,CLOSE_STEP} from '../constants';

import Message from '../../message/Messages'


import SymptonInputContainer from '../containers/SymptonInputContainer';

const ChatBotStepElement = ({currentStep}) =>{
    switch (currentStep){
        case SYMPTON_STEP:
            return <SymptonInputContainer/>;
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