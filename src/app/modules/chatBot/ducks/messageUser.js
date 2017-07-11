import {MESSAGER_USER, MESSAGE_USER_ID} from '../constants';

const initialState = {
    byId: {
        1: {
            messageId: 1,
            time: '',
            text: '',
        },
    },
    allIDS: []
};

export default function messageUser(state = initialState, action) {
    switch (action.type) {
        case MESSAGE_USER_ID:
            return {...state, messageID: {...state.messageId + 1}};
        case MESSAGER_USER:
            return {...state, text: action.payload};
        default :
            return state
    }
}