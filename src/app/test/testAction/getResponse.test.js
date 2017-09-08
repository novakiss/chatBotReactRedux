import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

import {ANSWER_STEP, QUESTION_STEP, ERROR, START, SUCCESS} from '../../constants';

import {getResponseFromServer} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({});

const data = 'Test Data';

const expectedResponseFromServerStart = [{
    payload: true,
    type : START
}];

describe('test get Response', () => {
    it('test Post Request to Server', () => {
        new Promise(postRequestAllgemeinAction(API_URL + '/posts', postDataTest)).then(e => {
            console.log(e);
            expect(e).toEqual(expectedPostData);
        })
    });


    it('test',()=>{
       new Promise(getResponseFromServer(data)).then((e) =>{
           console.log(e);
       })
   });

    it('test2',()=>{
      store.dispatch(getResponseFromServer(data));
      expect(store.getActions()).toEqual(data)
    })
});


