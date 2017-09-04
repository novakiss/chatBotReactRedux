import {ANSWER_STEP,CHANGE_STEP} from '../constants';

const initialState = {
    currentStep : ANSWER_STEP,
};

export default function step(state = initialState , action) {
    switch (action.type){
        case CHANGE_STEP:
            return {...state, currentStep: action.payload};
        default:
            return state;
    }
}