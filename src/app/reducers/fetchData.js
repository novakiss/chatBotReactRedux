import {START, SUCCESS, ERROR, NEW_MESSAGE} from '../constants';

const initialState = {
    success: false,
    error: false,
    loading: false,
    response: {},
};

export default function step(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:  //if success Response
            return {...state, success: true, response: action.payload};
        case ERROR:  //if error Response
            return {...state, error: true};
        case START:  //for start Transaction
            return {...state, loading: false};
        case NEW_MESSAGE:  //for reset fetchData-State
            return {...state, success: false, error: false, loading: false};
        default:
            return state;
    }
};