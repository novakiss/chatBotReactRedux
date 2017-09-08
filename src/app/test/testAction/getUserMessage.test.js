import {USERMESSAGE, NEWMESSAGE, SUCCESS,ERROR} from '../../constants';

import {getUserMessage, testAction} from '../../action';

import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore();

const message = 'Message of User';

const expectedGetUserMessage = [{
    type: USERMESSAGE,
    payload: 'Message of User'
}];

const name = 'pascal';

const expectNewMessage = [{
    type: NEWMESSAGE
}];

const expectSuccess = [{
    type: SUCCESS,
    payload : 'pascal'
}];

const expectError = [{
    type: SUCCESS
}];

describe('test getUserMessageAction', () => {
    it('test this Action', () => {
        store.dispatch(getUserMessage(message));
        expect(store.getActions()).toEqual(expectedGetUserMessage);
    });
});

describe('test testAction', () => {
    it('test this Action', () => {
        //store.dispatch(testAction(name));
        //expect(store.getActions()).toEqual(expectNewMessage);
        new Promise(testAction(name)).then(res =>{
            console.log(res);})
    });


});



