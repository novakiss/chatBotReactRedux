import React from 'react';
import {connect} from 'react-redux';

import {QUESTION_STEP} from '../constants';

import {selectStep} from '../selectors';


const QuestionContainer = ({currentStep}) => {
    if (currentStep === QUESTION_STEP) {
        return <div>Change Success</div>
    }

    return <div>Question Step false</div>
};

export default connect(
    state => {
        const {currentStep} = selectStep(state);
        return {currentStep};
    }
)(QuestionContainer);


