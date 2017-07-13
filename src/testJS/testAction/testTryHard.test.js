import {FETCH_DATA, POST_DATA} from '../../app/modules/chatBot/constants';
import thunk from 'redux-thunk';
import {actionMustTest as actionMustTestAction,twoFunction } from '../../app/modules/chatBot/actions';
import configureMockStore  from 'redux-mock-store';


const expectedAction = [
    {type: POST_DATA,payload:'test1'},
    {type: FETCH_DATA,payload:'test2'}
];

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockDispatch =  jest.fn();

const store = mockStore({todos: [] });

describe('test Try Hard', () => {
    it('test action', () => {
        const a = store.dispatch(actionMustTestAction('test1','test2'));
        console.log(a);
    });

    it ('test' ,() =>{
        const b = (mockDispatch) (actionMustTestAction('test1','test2'));
        console.log(b);
    });

    it('test 2 functions',() =>{
         store.dispatch(twoFunction('test1','test2')).then (e =>console.log(e));
    });
});


