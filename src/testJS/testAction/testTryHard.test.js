import {FETCH_DATA, POST_DATA} from '../../app/modules/chatBot/constants';
import thunk from 'redux-thunk';
import {actionMustTest as actionMustTestAction } from '../../app/modules/chatBot/actions';
import configureMockStore  from 'redux-mock-store';

const expectedAction = [
    {type: POST_DATA,payload:'a'},
    {type: FETCH_DATA,payload:'b'}
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDispatch =  jest.fn();

const store = mockStore({});

describe('test Try Hard', () => {
    it('test action', () => {
        const a = store.dispatch(actionMustTestAction('a','b'));
        expect(store.getActions()).toEqual(expectedAction)
    });

    it('mock dispatch',() =>{
        console.log(mockDispatch)
    })
});
