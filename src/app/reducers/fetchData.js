import {START, SUCCESS, ERROR, NEW_MESSAGE} from '../constants';

const initialState = {
    success: false,
    error: false,
    loading: false,
    response: {},
};

export default function step(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return {...state, success: true, response: action.payload};
        case ERROR:
            return {...state, error: true};
        case START:
            return {...state, loading: false};
        case NEW_MESSAGE:
            return {...state, success: false, error: false, loading: false};
        default:
            return state;
    }
};