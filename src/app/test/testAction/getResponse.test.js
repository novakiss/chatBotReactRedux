import {equal, notEqual, deepEqual} from 'assert'
import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';


import {ANSWER_STEP, START, SUCCESS, BOT_MESSAGE, NEW_MESSAGE, CHANGE_STEP,ERROR} from '../../constants';
import {getResponseFromServer, postRequestAllgemein} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore();
const expectedSuccessAction = [
    {payload: true, type: START},
    {type: SUCCESS},
    {type: BOT_MESSAGE},
    {type: NEW_MESSAGE},
    {
        payload: ANSWER_STEP,
        type: CHANGE_STEP
    }];

const expectedErrorAction= [
    {payload: true, type: START},
    {type: ERROR},
    {type: NEW_MESSAGE},
    {payload: ANSWER_STEP, type: CHANGE_STEP}
];

nock('http://apoly.localhost/API/')
    .post('/chatbot/post')
    .reply(200, {body: {info: []}});

describe('async action', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('fetching todos has been done', () => {
        return store.dispatch(getResponseFromServer('data')).then(() => {
            expect(store.getActions()).toEqual(expectedSuccessAction);
        }).catch(()=>{
            expect(store.getActions()).toEqual(expectedErrorAction);
        })
    });
});







