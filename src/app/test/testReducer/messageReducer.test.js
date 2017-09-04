import message from '../../reducers/message';

import {MESSAGE} from '../../constants';

const expectedInitialState = {
    byID: {},
    chatIDs: []
};

const action = {
    type: MESSAGE,
    payload: {
        userMessageID: 1,
        botMessageID: 2,
        messageUserTime: '',
        messageBotTime: '',
        messageBot: 'Message of Bot',
        messageUser: 'Message of User',
    }
};

const action2 = {
    type: MESSAGE,
    payload: {
        userMessageID: 3,
        botMessageID: 4,
        messageUserTime: '',
        messageBotTime: '',
        messageBot: 'Message of Bot',
        messageUser: 'Message of User',
    }
};

const expectedState = {
    byID: {
        1: {
            messageId: 1,
            time: '',
            text: 'Message of User'
        },
        2: {
            messageId: 2,
            time: '',
            text: 'Message of Bot'
        },
    },
    chatIDs: [1, 2]
};

const expectedState2 = {
    byID: {
        1: {
            messageId: 1,
            time: '',
            text: 'Message of User'
        },
        2: {
            messageId: 2,
            time: '',
            text: 'Message of Bot'
        },
        3: {
            messageId: 3,
            time: '',
            text: 'Message of User'
        },
        4: {
            messageId: 4,
            time: '',
            text: 'Message of Bot'
        },
    },
    chatIDs: [1,2,3,4]
};

describe('step reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(message(undefined, {})).toEqual(expectedInitialState);
    });
    it('test if action.type is Message', () => {
        expect(message(undefined, action)).toEqual(expectedState)
    });
    it('test  if action.type is Message and state is not init State', () => {
        expect(message(expectedState, action2)).toEqual(expectedState2)
    });
});
