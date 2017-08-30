import React from 'react';
import {connect} from 'react-redux';

import {SYMPTOM_STEP} from '../constants';

import {selectStep} from '../selectors';
import SymtomInput from "../components/SymtomInput";

const SymptomInputContainer = ({currentStep}) => {
    if (currentStep === SYMPTOM_STEP) {
        return <SymtomInput {...this.props}/>
    }

    return <div>Sympton Step false</div>
};

export default connect(
    state => {
        const {currentStep} = selectStep(state);
        return {currentStep};
    }
)(SymptomInputContainer);