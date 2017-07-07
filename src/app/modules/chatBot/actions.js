import {
    CHANGE_STEP,
    SYMPTOM_STEP,
    QUESTION_STEP,
    ANSWER_STEP,
    CLOSE_STEP,
    NEW_ANSWER,
    STEP_DONE,
    CHAT_BOT_ORDER
} from './constants';
import {selectChatBot} from './selectors';


export const changeStep = (step) => ( {type: CHANGE_STEP, payload: step} );

const getNextStep = () => (dispatch, getState) => {
    const stepsDone = selectChatBot(getState()).stepDone;
    const nextStep = CHAT_BOT_ORDER.filter(step => !stepsDone[step])[0];
    dispatch(changeStep(nextStep));
};

const stepDone = (step) => (dispatch) => {
    dispatch({type: STEP_DONE, payload: step});
    dispatch(getNextStep());
};

/**
 * 2 cach su dung =>
 // => {return...}
 // => ()
 */

export const editSymptonInput = changeStep(SYMPTOM_STEP);
export const editQuestion = changeStep(QUESTION_STEP);
export const editAnswer = changeStep(ANSWER_STEP);
export const editClose = changeStep(CLOSE_STEP);


export const symptomInputDone = () => {
    return stepDone(SYMPTOM_STEP);
};
/*
export const questionDone = (step) => {
    stepDone(QUESTION_STEP);
};
*/
//TODO:  get questionID
/*
export const newQuestion = (questionId) => {
    return {type: NEW_QUESTION, payload: questionId};
};
*/
export const newAnswer = (answer) => {
    return {type: NEW_ANSWER, payload: answer};
};



export function addTodo(text) {
    return {
        type:  'ADD_TODO',
        text
    }
}


export const changeStepTest = (text) =>(
   {
      type : CHANGE_STEP,
      payload: text
  }
);
