import {QUESTION, QUESTION_TYPE, QUESTION_MESSAGE} from '../constants';

/*
 single-entity: {
 messageId: 1,
 time: '',
 questionType: 0,
 text: '',
 },
 */
const initialState = {
    byId: {
    },
    allIDs: [],
};

export default function question(state = initialState, action) {
    switch (action.type) {
        case QUESTION :
            const id = action.payload.id;
            const questionType = action.payload.questionType;
            const entityById = state.byId[id];
            const changedEntity = { ...entityById, messageId : id, time: action.payload.time, questionType: questionType  };
            
            return {...state, byId: { ...state.byId, [id]: changedEntity },allIDs: [...state.allIDs, ...[id] ] };
        case QUESTION_TYPE :
            return {...state, byId :{questionType: action.payload.questionType}};
        case QUESTION_MESSAGE:
            return {...state , byId : {...state.byId, text : action.payload.message}};
        default:
            return state;
    }
}