import {connect} from 'react-redux';

import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

const mapStateToProps = (state, props) => {
    const {currentStep} = stepSelector(state);
    const {text, type, medicine,noQuestion} = messageSelector(state).byID[props.id];
    return {currentStep, text, type,medicine,noQuestion};
};

export default connect(mapStateToProps)(Message);
