import {START, SUCCESS, ERROR} from '../constants';

const initialState = {
    success: false,
    error: false,
    loading:false,
    response: null,
};

export default function step(state= initialState, action) {
    switch (action.type) {
        case SUCCESS:
            return {success: true, error: false, loading: false, response: action.payload};
        case ERROR:
            return {success: false, error : true, loading: false};
        case START:
            return {success: false, error: false, loading: false, response : null};
        default:
            return state;
    }
};