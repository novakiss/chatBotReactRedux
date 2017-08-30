import {newMessage} from './messages';
import {axios} from 'axios';

const SUCCEEDED = '';
const FAILED = '';
const START = ''; // =>


const initialState = {
    success: false,
    error: false,
    loading: false,
    lastResponse: null, // eher logging-zwecke
};

const reducer = (state, action) => {
    switch (action.type) {
        case SUCCEEDED:
            return {error: false, success: true, loading: false, lastResponse: action.payload};
        case FAILED:
            // information über error in payload
            return {error: action.payload || true, success: false, loading: false, lastResponse: null};
        case START:
            return {error: false, success: false, loading: true, lastResponse: null};
        default:
            return state;
    }
};

const start = () => ({type: START});
const succeeded = (res) => ({type: SUCCEEDED, payload: res});
const failed = (error) => ({type: FAILED, payload: error});

const fetchUserMessages = (URL) => (dispatch) => {
    dispatch(start());

    axios.get(URL)
        .then((res) => {
            dispatch(succeeded(res));
            dispatch(newMessage(res));
        })
        .catch(ex => dispatch(failed(ex)))
};


const postUserMessage = (URL, data) => (dispatch) => {
    dispatch(start());

    axios.post(URL, data)
        .then((response) => {
            dispatch(succeeded(response));
            dispatch(newMessage(response));
        }).catch(ex => dispatch(failed(ex)))
};

const putUserMessage = (URL, data) => {
    dispatch(start());

    axios.put(URL, data)
        .then((response) => {
            dispatch(succeeded(response));
            dispatch(newMessage(response));
        }).catch(ex => dispatch(failed(ex)))

};

