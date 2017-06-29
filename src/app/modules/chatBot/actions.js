import {
    CHANGE_STEP,
    SYMPTON_STEP,
    QUESTION_STEP,
    ANSWER_STEP,
    CLOSE_STEP,
    ANSWER,
    STEP_DONE,
    NEW_QUESTION
} from './constants';

const changeStep = (step) => ({type: CHANGE_STEP, payload: step});

export const editSymptonInput = changeStep(SYMPTON_STEP);
export const editQuestion = changeStep(QUESTION_STEP);
export const editAnswer = changeStep(ANSWER_STEP);
export const editClose = changeStep(CLOSE_STEP);

export const symptonInputDone = () => {
    changeStep(QUESTION_STEP);
    return {type: STEP_DONE, payload: SYMPTON_STEP}
};

export const questionDone = (step) => {
    changeStep(ANSWER_STEP);
    return {type: STEP_DONE, payload: QUESTION_STEP};
};

export const answerDone = (step) => {
    changeStep(CLOSE_STEP);
    return {type: STEP_DONE, payload: CLOSE_STEP};
};

//TODO:  get questionID

export const newQuestion = (questionId) => {
  return {type: NEW_QUESTION, payload: questionId  };
};

export const newAnswer = (answer) => {
    return {type: ANSWER, payload: answer };
};











