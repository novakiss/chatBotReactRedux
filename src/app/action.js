import {
    CHANGE_STEP,
    ANSWER_STEP,
    QUESTION_STEP,
    START,
    SUCCESS,
    ERROR,
    BOT_MESSAGE,
    NEW_MESSAGE,
    USER_MESSAGE
} from './constants';

import axios from 'axios';

export const changeStepToQuestionStep = () => (dispatch) => dispatch(changeStep(ANSWER_STEP));

export const getUserMessage = (mess) => (dispatch) =>
    (dispatch({
        type: USER_MESSAGE,
        payload: mess
    }));

export const getResponseFromServer = (data, questionId = 1, score = null, userId = null, count = 0, questionType = null, question = null) => (dispatch) => {
    const answer = {
        answer: data,
        questionId: questionId,
        score: score,
        userId: userId,
        count: count,
        questionType: questionType,
        question: question
    };
    dispatch(start());
    return axios.post('http://apoly.localhost/API/chatbot/post', answer)
        .then((response) => {
                //console.log(response);
                return (response.data.data)
            }
        )
        .then((response) => {
            //console.log(response);
            dispatch(success(response));
            dispatch(getBotMessage(response));
            dispatch(newMessage());
            dispatch(changeStepToAnswerStep())
        }).catch(e => {
            console.log(e);
            dispatch(error());
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
    type: BOT_MESSAGE,
    payload: response
});


const newMessage = () => ({
    type: NEW_MESSAGE
});

