import {
    CHANGE_STEP,
    ANSWER_STEP,
    QUESTION_STEP,
    START,
    SUCCESS,
    ERROR,
    BOTMESSAGE,
    NEWMESSAGE,
    USERMESSAGE
} from './constants';

//import axios from 'axios';

export const changeStep = (step) => (dispatch) => {
    dispatch({type: CHANGE_STEP, payload: getNextStep(step)});
};

export const changeStepToQuestionStep = () => changeStep(ANSWER_STEP);
export const changeStepToAnswerStep =() => changeStep(QUESTION_STEP);

const getNextStep = (step) => {
    if (step === ANSWER_STEP) {
        return QUESTION_STEP
    }
    else return ANSWER_STEP;
};

export const start = () => ({type: START, payload: true});

export const success = () => ({type: SUCCESS, payload: true});


export const error = (error) => ({type: ERROR, payload: error});

export const getMessage = (response) => ({
    type: BOTMESSAGE,
    payload: response
});

export const getUserMessage = (mess)  => ({
    type: USERMESSAGE,
    payload: mess
});


export const newMessage = () => (dispatch) => {
    dispatch({
        type: NEWMESSAGE
    })
};


const timeoutP = mSec => new Promise(resolve => setTimeout(resolve, mSec));

const testData = {};
const getTestData = () => testData;

export const getResponseFromServer = (URL, data) => (dispatch) => {
    dispatch(start());
    // axios.post (URL, data) // TODO AUSTAUSCHEN
    timeoutP(100)
        .then(getTestData)
        .then((response) => {
            dispatch(success());
            dispatch(getMessage(response));
            dispatch(newMessage());
        }).catch(e => {
        dispatch(error(e));
        dispatch(newMessage());
    })
};


