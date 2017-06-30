import {GET_USER,SYMPTOM_STEP,STEP_DONE,CHANGE_STEP,NEW_QUESTION,ANSWER} from './constants';

const initialState = {
    currentStep : SYMPTOM_STEP,
    stepDone : {},
    questionTypeId : 0 ,
    userId : 0,
    answer : []
};

export default function reducer (state = initialState,action) {
  switch (action.type) {
      case STEP_DONE:
          return {...state,stepDone: {...state.stepDone,[action.payload]:true}};
      case CHANGE_STEP:
          return {...state,currentStep : action.payload};
      case NEW_QUESTION:
          return {...state, questionTypeId:action.payload};
      case GET_USER:
          return {...state,userId: action.payload};
      case ANSWER:
          return {...state, answer:action.payload};
      default:
          return state;
  }
};




