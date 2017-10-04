import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

import {QUESTION_STEP, CHANGE_STEP} from '../../constants';

import {changeStepToQuestionStep} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({});

const expectedChangeStepToQuestionStep = [{
    type: CHANGE_STEP,
    payload: QUESTION_STEP
}];

describe('test change step', () => {
    it('test change Step', () => {
        store.dispatch(changeStepToQuestionStep());
        expect(store.getActions()).toEqual(expectedChangeStepToQuestionStep);
    });
});


