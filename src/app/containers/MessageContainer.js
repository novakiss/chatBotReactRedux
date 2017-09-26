import {connect} from 'react-redux';

import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

const mapStateToProps = (state, props) => {
    const {currentStep} = stepSelector(state);
    const {text, type, medics,noQuestion,questionType,questionId} = messageSelector(state).byID[props.id];
    return {currentStep, text, type,medics,noQuestion,questionType,questionId};
};

export default connect(mapStateToProps)(Message);
