import {USERMESSAGE} from '../../constants';

import {getUserMessage} from '../../action';

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

const name = 'name';

describe('test getUserMessageAction', () => {
    it('test this Action', () => {
        store.dispatch(getUserMessage(message));
        expect(store.getActions()).toEqual(expectedGetUserMessage);
    });
});







