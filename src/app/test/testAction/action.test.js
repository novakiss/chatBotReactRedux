import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

import {ANSWER_STEP, QUESTION_STEP, ERROR, START, SUCCESS, CHANGE_STEP} from '../../constants';


import {changeStep, start} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({});

const expectedchangeStep = [{
    type: CHANGE_STEP,
    payload: QUESTION_STEP
}];


describe('test change step', () => {
    it('test change Step', () => {
        store.dispatch(changeStep(ANSWER_STEP));
        expect(store.getActions()).toEqual(expectedchangeStep);
    });
});
describe('test getResponseFromServer', () => {
    it('test async getResponseFromServer', () => {
        store.dispatch(start);
        expect(store.getActions()).toEqual([{"payload": true, "type": "START"}])
    })
});

