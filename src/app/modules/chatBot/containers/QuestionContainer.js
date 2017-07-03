import React from 'react';
import {connect} from 'react-redux';

import {QUESTION_STEP} from '../constants';

import {selectChatBot} from '../selectors';


const QuestionContainer = ({currentStep}) => {
    if (currentStep === QUESTION_STEP) {
        return <div>Change Success</div>
    }

    return <div>Sympton Step false</div>
};

export default connect(
    state => {
        const {currentStep} = selectChatBot(state);
        return {currentStep};
    }
)(QuestionContainer);


