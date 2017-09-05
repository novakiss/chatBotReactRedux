import {START, SUCCESS, ERROR, NEWMESSAGE} from '../constants';

const initialState = {
    success: false,
    error: false,
    loading: false,
    response: null,
};

export default function step(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return {...state, success: true, response: action.payload};
        case ERROR:
            return {...state, error: true};
        case START:
            return {...state, loading: false};
        case NEWMESSAGE:
            return initialState;
        default:
            return state;
    }
};