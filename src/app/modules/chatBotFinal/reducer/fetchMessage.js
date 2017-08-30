import {START,ERROR,SUCCESS} from '../constants';

const initialState = {
    success: false,
    error: false,
    loading: false,
    response: null,
};

export default reducer  = (state = initialState, action) => {
    switch (action.type) {
        case START:
            return {success: false, error: false, loading: true};
            break;
        case ERROR:
            return {success: false, error: true, loading: false, response: null};
            break;
        case SUCCESS:
            return {success: true, error: false, loading: false, response: action.payload};
            break;
        default:
            return state;
    }
};