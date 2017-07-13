import {FETCH_DATA, POST_DATA, ERROR_DATA} from '../constants';

const initialState = {
    getData: {},
    postData: {},
    error: {}
};

export default function axiosFetchData(state = initialState, action) {
    switch (action.type) {
        case  ERROR_DATA:
            return {...state, error:action.payload};

        case FETCH_DATA:
            const entityFetchId = action.payload.id;
            return {...state, getData: {...state.getData, [entityFetchId]: [action.payload]}};

        case POST_DATA:
            const entityPostId = action.payload.id;
            return {...state, postData: {...state.postData, [entityPostId]:action.payload}};
        default:
            return state;
    }
} ;