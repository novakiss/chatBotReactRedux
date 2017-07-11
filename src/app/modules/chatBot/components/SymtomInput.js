import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import {selectChatBot} from '../selectors';
import {symptomInputDone as systomInputDoneAction} from '../actions';

const SymtomInput = ({symptomInputDone}) => {
    return <div>
        Sympton Input Success
        <button onClick={ symptomInputDone}>NEXT</button>
    </div>;

};

const mapStateToProps = (state) => {
    const {currentStep, stepDone} = selectChatBot(state);
    return {currentStep, stepDone};
};

//2 Möglichkeiten use MapDispatchTo Props
//const mapDispatchToProps = {symptomInputDone: systomInputDoneAction};

const mapDispatchToPropsAction = dispatch => bindActionCreators({symptomInputDone: systomInputDoneAction}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToPropsAction
)(SymtomInput)