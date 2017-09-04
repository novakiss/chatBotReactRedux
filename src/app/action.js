import {CHANGE_STEP,
        CHAT_BOT_ORDER,
        ANSWER_STEP,
        QUESTION_STEP,
} from './constants';

export const changeStep = (step) => (dispatch) => {
   return { type: CHANGE_STEP, payload : getNextStep(step)}
};

const getNextStep = (step) => {
  if (step = ANSWER_STEP) {return QUESTION_STEP}
  else return ANSWER_STEP;
};