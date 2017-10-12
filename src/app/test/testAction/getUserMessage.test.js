import {USER_MESSAGE} from '../../constants';

import {getUserMessage} from '../../action';

import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const store = mockStore();

const message = 'Message of User';

const expectedGetUserMessage = [{
    type: USER_MESSAGE,
    payload: 'Message of User'
}];

describe('test getUserMessageAction', () => {
    it('test this Action', () => {
        store.dispatch(getUserMessage(message));
        expect(store.getActions()).toEqual(expectedGetUserMessage);
    });
});