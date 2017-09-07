import {connect} from 'react-redux';

import {stepSelector, messageSelector} from '../selectors';

import Message from '../components/Message';

const mapStateToProps = (state, props) => {
    const {currentStep} = stepSelector(state);
    const {text, type} = messageSelector(state).byID[props.id];
    return {currentStep, text, type};
};

export default connect(mapStateToProps)(Message);
