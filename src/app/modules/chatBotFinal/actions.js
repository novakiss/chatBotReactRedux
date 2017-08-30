import {ERROR,SUCCESS,START} from './constants';

const start = () => ({type: START});

const succeeded = (res) => ({type: SUCCESS, payload: res});

const failed = (error) => ({type: ERROR, payload: error});

const postUserMessage = (URL, data) => (dispatch) => {
    dispatch(start());

    axios.post(URL, data)
        .then((response) => {
            dispatch(succeeded(response));
            dispatch(newMessage(response));
        }).catch(ex => dispatch(failed(ex)))
};