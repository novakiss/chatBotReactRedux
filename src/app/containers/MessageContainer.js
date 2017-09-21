import {connect} from 'react-redux';

import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

const mapStateToProps = (state, props) => {
    const {currentStep} = stepSelector(state);
    const {text, type, medicine,noQuestion,questionType,questionId} = messageSelector(state).byID[props.id];
    //const {questionType} = fetchDataSelector(state).response;
    return {currentStep, text, type,medicine,noQuestion,questionType,questionId};
};

export default connect(mapStateToProps)(Message);
