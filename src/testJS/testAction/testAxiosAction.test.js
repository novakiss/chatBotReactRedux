import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    getRequestAllgemein as getRequestAllgemeinAction,
    getRequest as getRequestAction,
    getRequestError as getRequestErrorAction,
    postRequestAllgemein as postRequestAllgemeinAction,
    postRequest as postRequestAction
} from '../../app/modules/chatBot/actions';

import {FETCH_DATA, POST_DATA, ERROR_DATA} from '../../app/modules/chatBot/constants';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();
const API_URL = 'http://jsonplaceholder.typicode.com';

const expectedFetchData = {
    type: FETCH_DATA,
    payload: {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
};

const expectedErrorData = {
    type: ERROR_DATA,
    payload: {
        type: 'ERROR_DATA',
        payload: {status: 404, statusText: 'Not Found'}
    }
};

const postDataTest = {
    firstName: 'Test First Name',
    lastName: 'Last Name'
};

const expectedPostData = {
    type: POST_DATA,
    payload: postDataTest
};

describe('async actions', () => {
    //2 cach de test asynchrone -> 1 su dung new Promise
    //                           ->2 su dung mockStore (getActions la 1 array)

    describe('test FETCH DATA response', () => {
        it('test getRequest All use Promisse', () => {
            new Promise(getRequestAllgemeinAction(API_URL + '/posts/1')).then(e => {
                expect(e).toEqual(expectedFetchData);
            })
        });

        it('test for Get Request Allgemein use MockStore', () => {
            store.dispatch(getRequestAllgemeinAction(API_URL + '/posts/1')).then(() => {
                // getactions liefert array zurück => alle ausgeführten aktionen in reihenfolge
                expect(store.getActions()[0]).toEqual(expectedFetchData)
            })
        });
        it('test get Request from API URL', () => {
            new Promise(getRequestAction()).then(e =>
                expect(e).toEqual(expectedFetchData)
            );
        });
    });

    describe('test FETCH DATA error', () => {
        it('get Error Request use Promisse ', () => {
            new Promise(getRequestAllgemeinAction(API_URL + '/post/1')).then(e => {
                expect(e).toEqual(expectedErrorData);
            })
        });

        it('getError Request use MockStore', () => {
            store.dispatch(getRequestAllgemeinAction(API_URL + '/post/1')).then(() => {
                expect(store.getActions()[0]).toEqual(expectedErrorData);
            })
        });
        it ('test Fetch Data Error ' ,() =>{
            new Promise(getRequestErrorAction()).then ((e)=>{
                expect (e).toEqual(expectedErrorData);
            })
        })

    });

    describe('test Post Request to Server response', () => {
        it('test Post Request to Server', () => {
            new Promise(postRequestAllgemeinAction(API_URL + '/posts', postDataTest)).then(e => {
                expect(e).toEqual(expectedPostData);
            })
        });
        it('test Post Request use store', () => {
            store.dispatch(postRequestAllgemeinAction(API_URL + '/posts', postDataTest)).then(() => {
                expect(store.getActions()[0]).toEqual(expectedPostData)
            })
        });

        it('test Post Request response ',()=>{
            new Promise(postRequestAction()).then(()=>{
                expect(e).toEqual(expectedPostData);
            })
        })
    });

    describe('test Post Request To server reject', () => {
        it('test Post Request Error import false URL', () => {
            new Promise(postRequestAllgemeinAction(API_URL + '/post', postDataTest)).then(e => {
                expect(e).toEqual(expectedErrorData);
            })
        });
    });

});




