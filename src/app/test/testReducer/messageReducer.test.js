import message from '../../reducers/message';

import {BOTMESSAGE, USERMESSAGE} from '../../constants';

const expectedInitialState = {
    byID: {},
    chatIDs: [],
};

const action = {
    type: BOTMESSAGE,
    payload: {
        botMessageID: 1000,
        messageBotTime: 'time Bot send',
        question: 'Symptom',
    }
};

const expectedState = {
    byID: {
        1000: {
            messageID: 1000,
            time: 'time Bot send',
            text: 'Symptom',
            type: 'bot'
        },
    },
    chatIDs: [1000]
};


const action2 = {
    type: USERMESSAGE,
    payload: {
        userMessageID: 3,
        messageUserTime: '',
        messageUser: 'Message of User',
    }
};

const expectedState2 = {
    byID: {
        3: {
            messageID: 3,
            time: '',
            text: 'Message of User',
            type: 'user'
        }
    },
    chatIDs: [3]
};

const action3 = {
    type: BOTMESSAGE,
    payload: {
        botMessageID: 5,
        messageBotTime: 'time Bot send',
        question: 'Alt',
    }
};

const expectedState3 = {
    byID: {
        3: {
            messageID: 3,
            time: '',
            text: 'Message of User',
            type: 'user'
        },
        5: {
            messageID: 5,
            time: 'time Bot send',
            text: 'Alt',
            type: 'bot'
        },
    },
    chatIDs: [3, 5]
};

describe('step reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(message(undefined, {})).toEqual(expectedInitialState);
    });
    it('test if action.type is Bot Message', () => {
        expect(message(undefined, action)).toEqual(expectedState)
    });
    it('test if action.type is User Message', () => {
        expect(message(undefined, action2)).toEqual(expectedState2)
    });

    it('test  if state is not init State', () => {
        expect(message(expectedState2, action3)).toEqual(expectedState3)
    });
});
