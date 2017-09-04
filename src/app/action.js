import {
    CHANGE_STEP,
    ANSWER_STEP,
    QUESTION_STEP,
    START,
    SUCCESS,
    ERROR,

} from './constants';

export const changeStep = (step) => (dispatch) => {
    return {type: CHANGE_STEP, payload: getNextStep(step)}
};

const getNextStep = (step) => {
    if (step = ANSWER_STEP) {
        return QUESTION_STEP
    }
    else return ANSWER_STEP;
};

export const start = (dispatch) => {
    dispatch({type: START, payload: true});
};

export const success = (dispatch) => {
    dispatch({type: SUCCESS, payload: true});
};

export const error = (dispatch) => {
  dispatch({type: ERROR, payload: true})
};


