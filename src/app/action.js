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

import axios from 'axios';

export const changeStepToQuestionStep = () => (dispatch) => dispatch(changeStep(ANSWER_STEP));

export const getUserMessage = (mess) => (dispatch) =>
    (dispatch({
        type: USERMESSAGE,
        payload: mess
    }));

export const getResponseFromServer = (data, questionId = 1, score = null, userId = null, count = 0) => (dispatch) => {
    const answer = {
        answer: data,
        questionId: questionId,
        score: score,
        userId: userId,
        count: count
    };
    dispatch(start());
    return axios.post('http://apoly.localhost/API/chatbot/post', answer)
        .then((response) => {
                console.log(response);
                return (response.data.data)
            }
        )
        .then((response) => {
            //console.log(response);
            dispatch(getBotMessage(response));
            dispatch(success(response));
            dispatch(newMessage());
            dispatch(changeStepToAnswerStep())
        }).catch(e => {
            console.log(e);
            dispatch(error(e));
            dispatch(newMessage());
            dispatch(changeStepToAnswerStep());
        })
};


const changeStep = (step) => (dispatch) => {
    dispatch({type: CHANGE_STEP, payload: getNextStep(step)});
};

const changeStepToAnswerStep = () => changeStep(QUESTION_STEP);

const getNextStep = (step) => {
    if (step === ANSWER_STEP) {
        return QUESTION_STEP
    }
    else return ANSWER_STEP;
};

const start = () => ({type: START, payload: true});

const success = (res) => ({type: SUCCESS, payload: res});

const error = () => ({type: ERROR});

const getBotMessage = (response) => ({
    type: BOTMESSAGE,
    payload: response
});


const newMessage = () => ({
    type: NEWMESSAGE
});
/*
 const timeoutP = mSec => new Promise(resolve => setTimeout(resolve, mSec));

 const getTestData = () => ({
 botMessageID: Date.now(),
 messageBotTime: new Date().toISOString(),
 messageBot: 'Your next Question',
 noQuestion:true,
 medicine: 'Medicine'
 });
 */

