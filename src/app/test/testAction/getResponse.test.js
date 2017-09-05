import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

import {ANSWER_STEP, QUESTION_STEP, ERROR, START, SUCCESS, CHANGE_STEP} from '../../constants';

import {getResponseFromServer} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({});


describe('test get Response', () => {
    it('test ', () => {
        new Promise(getResponseFromServer('URL' , 'data')).then ((res) =>{
          expect(res) .toEqual();
        }).catch((e)=>{
            expect(e).toEqual();

        })
       // store.dispatch(changeStep(ANSWER_STEP));
        //expect(store.getActions()).toEqual(expectedchangeStep);
    });
});


