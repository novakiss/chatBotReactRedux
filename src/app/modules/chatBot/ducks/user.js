import {} from '../constants';

const initialState = {
    userID : 0,
    userName : ''
};

export default function reducer (state = initialState,action) {
    switch (action.type) {
        case STEP_DONE:
            return {...state,stepDone: {...state.stepDone,[action.payload]:true}};
        case CHANGE_STEP:
            return {...state,currentStep : action.payload};
        default:
            return state;
    }
};




