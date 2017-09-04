import {
    CHANGE_STEP,
    ANSWER_STEP,
    QUESTION_STEP,
    START,
    SUCCESS,
    ERROR,
    MESSAGE,NEWMESSAGE
} from './constants';

import axios from 'axios';

export const changeStep = (step)  => (dispatch) => {
    dispatch({type: CHANGE_STEP, payload: getNextStep(step)}) ;
};

const getNextStep = (step) => {
    if (step === ANSWER_STEP) {
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

export const error = (error) => (dispatch) => {
  dispatch({type: ERROR, payload: error})
};

export const getMessage = (response) => (dispatch) => {
    dispatch({
        type: MESSAGE,
        payload : response
    })
};
export const newMessage = (dispatch) =>{
    dispatch({
        type: NEWMESSAGE
    })
};

export const getResponseFromServer = (URL, data) =>(dispatch) => {
    dispatch(start());
    return axios.post (URL, data)
        .then((response)=>{
             success();
             getMessage(response);
        }).catch(e => error(e))
};


