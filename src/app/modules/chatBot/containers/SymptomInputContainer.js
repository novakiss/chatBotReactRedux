import React from 'react';
import {connect} from 'react-redux';

import {SYMPTOM_STEP} from '../constants';

import {selectChatBot} from '../selectors';
import SymtonInput from "../components/SymtonInput";

const SymptomInputContainer = ({currentStep}) => {
    if (currentStep === SYMPTOM_STEP) {
        return <SymtonInput {...this.props}/>
    }

    return <div>Sympton Step false</div>
};

export default connect(
    state => {
        const {currentStep} = selectChatBot(state);
        return {currentStep};
    }
)(SymptomInputContainer);


