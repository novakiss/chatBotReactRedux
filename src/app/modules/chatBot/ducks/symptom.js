import {SYMPTOM_INPUT_MESSAGE,SYMPTOM_INPUT_FINISH} from '../constants';

const initialState = {
    symptompInputMessage : '',
    symptomInputID : 0,
    finishSymptom: false ,
};

export default function symptom (state = initialState,action) {
    switch (action.type) {
        case SYMPTOM_INPUT_MESSAGE :
            return {...state, symptompInputMessage:action.payload};
        case SYMPTOM_INPUT_FINISH:
            return {...state, finishSymptom: true};
        default:
            return state;
    }
};




