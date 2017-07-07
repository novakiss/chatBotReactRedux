import {TIME, QUESTION_TYPE, ANSWER_MESSAGE} from '../constants';

const initialState = {
    byId: {
        1: {
            messageId: 1,
            time: '',
            questionType: 0,
            text: '',
        },
    },
    allIDS: []
};

export default function question(state = initialState, action) {
    switch (action.payload) {
        case TIME :
            return {...state, time : action.payload };
        case QUESTION_TYPE :
            return {...state, questionType: action.payload};
        case ANSWER_MESSAGE:
            return {...state,text : action.payload};
        default:
            return state;
    }
}