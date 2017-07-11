import {SYMPTOM_STEP,STEP_DONE,CHANGE_STEP,FINISH} from '../constants';

const initialState = {
    currentStep : SYMPTOM_STEP,
    stepDone : {},
    finishConversation: false
};

export default function step (state = initialState,action) {
    switch (action.type) {
        case STEP_DONE:
            return {...state,stepDone: {...state.stepDone,[action.payload]:true}};
        case CHANGE_STEP:
            return {...state,currentStep : action.payload};
        case FINISH:
            return {...state , finishConversation:true};
        default:
            return state;
    }
};
