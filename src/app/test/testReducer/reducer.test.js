import reducers from '../../reducer';

import {ANSWER_STEP} from '../../constants';

const expectedInitialState = {
    state: {
        step: {
            currentStep: ANSWER_STEP
        },
        fetchData: {
            error: false,
            loading: false,
            success: false,
            response: {}
        },
        message: {
            byID: {},
            chatIDs: []
        }
    }
};

describe('reducers', () => {
    it('should all Initial State', () => {
        let state;
        state = reducers(undefined, {});
        expect(state).toEqual(expectedInitialState)
    });
});