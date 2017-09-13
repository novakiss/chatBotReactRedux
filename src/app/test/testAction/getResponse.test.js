import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';


import {ANSWER_STEP, QUESTION_STEP, ERROR, START, SUCCESS,BOTMESSAGE} from '../../constants';
import {getResponseFromServer} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const expectedStart = [{
    type: START,
    payload: true
}];
const expectError = {
  type: ERROR,
    payload: true,
};

const expectedAction = [
    {type: START, payload: true},
    {type: SUCCESS, payload: 'data'}
];

const store = mockStore({});

describe('async action', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('test start Action', () => {
        store.dispatch(getResponseFromServer('data'));
        expect(store.getActions()).toEqual(expectedStart);
    });
    it('test full ', () => {
        store.dispatch(getResponseFromServer('data'));
        expect(store.getActions()).toEqual(expectedStart);
        new Promise (getResponseFromServer('data')).then (res =>  {
            console.log(res);
            expect(res) .toEqual (expectedStart);
        }).catch(e =>{
            console.log(e);
            expect(e) .toEqual(expectError);
        })
    });
});





