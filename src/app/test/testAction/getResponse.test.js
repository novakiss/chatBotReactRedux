import thunk from 'redux-thunk';
import configureMockStore  from 'redux-mock-store';

import {ANSWER_STEP, QUESTION_STEP, ERROR, START, SUCCESS, CHANGE_STEP} from '../../constants';

import {getResponseFromServer} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore({});


describe('test get Response', () => {
    it('test ', () => {
        new Promise(getResponseFromServer('URL', 'data')).then((res) => {
            expect(res).toEqual();
        }).catch((e) => {
            expect(e).toEqual();

        })
        // store.dispatch(changeStep(ANSWER_STEP));
        //expect(store.getActions()).toEqual(expectedchangeStep);
    });
    it('test', () => {
        const a = {
            byID: {
                0: {
                    id: 0,
                    text: 'Symptom Question'
                },
                1: {
                    id: 1,
                    text: 'dkmm'
                }
            },
            chatIDs: [0, 1],
        };
        a.chatIDs.map(i => console.log(a.byID[i].text) );
    });

    it ('test1' , () => {
        const arrayy = [0,1];
        const obj = {
            0: {
                id: 0,
                text: 'Symptom Question'
            },
            1: {
                id: 1,
                text: 'dkmm'
            }
        };
        arrayy.map(i=> console.log(obj[i].text));

    })
});


