import {connect} from 'react-redux';

import {stepSelector, messageSelector, fetchDataSelector} from '../selectors';

import {getUserMessage as getUserMessageAction, getResponseFromServer as getResponseFromServerAction,changeStepToQuestionStep} from '../action';

import Message from '../components/Message';

const mapStateToProps = (state, props) => {
    const {currentStep} = stepSelector(state);
    const {text, type,questionType} = messageSelector(state).byID[props.id];
    const {score,userId,count,question,noQuestion,medics,questionId} = fetchDataSelector(state).response;
    return {currentStep, text, type,medics,noQuestion,questionType,questionId,score,userId,count,question};
};

const mapDispatchToProps = {
    getUserMessage : getUserMessageAction,
    getResponse :getResponseFromServerAction,
    changeStep: changeStepToQuestionStep
};

export default connect(mapStateToProps,mapDispatchToProps)(Message);
