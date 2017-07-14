import axios from 'axios';
import {
    CHANGE_STEP,
    SYMPTOM_STEP,
    QUESTION_STEP,
    ANSWER_STEP,
    CLOSE_STEP,
    NEW_ANSWER,
    STEP_DONE,
    FETCH_DATA,
    POST_DATA,
    ERROR_DATA,
    UPDATE_DATA,
    CHAT_BOT_ORDER
} from './constants';
import {selectStep} from './selectors';

const API_URL = 'http://jsonplaceholder.typicode.com';

export const changeStep = (step) => ( {type: CHANGE_STEP, payload: step} );

export const getNextStep = () => (dispatch, getState) => {
    const stepsDone = selectStep(getState()).stepDone;
    const nextStep = CHAT_BOT_ORDER.filter(step => !stepsDone[step])[0];
    dispatch(changeStep(nextStep));
};

export const editSymptonInput = changeStep(SYMPTOM_STEP);
export const editQuestion = changeStep(QUESTION_STEP);
export const editAnswer = changeStep(ANSWER_STEP);
export const editClose = changeStep(CLOSE_STEP);

export const symptomInputDone = () => {
    return stepDone(SYMPTOM_STEP);
};

export const newAnswer = (answer) => {
    return {type: NEW_ANSWER, payload: answer};
};

export const stepDone = (step) => (dispatch) => {
    dispatch({type: STEP_DONE, payload: step});
    dispatch(getNextStep());
};

export const actionMustTest = (a, b) => (dispatch) => {
    dispatch({type: POST_DATA, payload: a});
    dispatch({type: FETCH_DATA, payload: b});
};

export const getRequestAllgemein = (a) => (dispatch) => {
    return axios.get(a)
        .then(function (response) {
            dispatch({
                type: FETCH_DATA,
                payload: response.data
            });
        })
        .catch(function (error) {
            console.log(error.response);
            dispatch({
                type: ERROR_DATA,
                payload: {status: error.response.status, statusText: error.response.statusText,}
            });
        });
};

//Post Request Allgemein

export const postRequestAllgemein = (a, b) => (dispatch) => {
    return axios.post(a, b)
        .then((response) => {
            console.log(response);
            dispatch({
                type: POST_DATA,
                payload: response.data
            })
        }).catch(function (error) {
            if (error.response) {
                dispatch({
                    type: ERROR_DATA,
                    payload: {
                        status: error.response.status,
                        statusText: error.response.statusText,
                    }
                });
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        })
};

//PUT allgemein

export const putRequestAllgemeine = (URL, data)=>(dispatch) =>{
    return axios.put(URL,data)
        .then((response) =>{
            dispatch({
                type: UPDATE_DATA,
                payload:response.data
            })
        }).catch (err => {
            if(err.response){
                dispatch ({
                    type: ERROR_DATA,
                    payload: {
                        status: err.response.status,
                        statusText: err.response.statusText,
                    }
                })
            }else if(err.request){
                console.log(err.request);
            }else {
                console.log(err.message)
            }
        })
};

//GET request
export const getRequest = () => {
    return getRequestAllgemein(API_URL + '/posts/2');
};

//GET request Error

export const getRequestError = () => {
    return getRequestAllgemein(API_URL + '/post/1');
};

//POST Request

export const postRequest = () => (postRequestAllgemein(API_URL + '/posts', {
    firstName: 'Test First Name',
    lastName: 'Last Name'
}));




