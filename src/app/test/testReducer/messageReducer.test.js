import message from '../../reducers/message';

import {BOTMESSAGE, USERMESSAGE} from '../../constants';

const expectedInitialState = {
    byID: {
        0: {
            messageID: 0,
            time: 0,
            text: 'QuestionInput?',
            type: 'bot'
        }
    },
    chatIDs: [0],
};

const action = {
    type: BOTMESSAGE,
    payload: {
        botMessageID: 1,
        messageBotTime: '',
        messageBot: 'Message of Bot',
    }
};

const expectedState = {
    byID: {
        0: {
            messageID: 0,
            time: 0,
            text: 'QuestionInput?',
            type: 'bot'
        },
        1: {
            messageID: 1,
            time: '',
            text: 'Message of Bot',
            type: 'bot'
        }
    },
    chatIDs: [0, 1]
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
        0:{
            messageID: 0,
            time: 0,
            text: 'QuestionInput?',
            type: 'bot'
        },
        3: {
            messageID: 3,
            time: '',
            text: 'Message of User',
            type: 'user'
        }
    },
    chatIDs:[0,3]
};

const action3 = {
    type: BOTMESSAGE,
    payload: {
        botMessageID: 5,
        messageBotTime: '',
        messageBot: 'Message of Bot',
    }
};

const expectedState3 = {
    byID: {
        0:{
            messageID: 0,
            time: 0,
            text: 'QuestionInput?',
            type: 'bot'
        },
        3: {
            messageID: 3,
            time: '',
            text: 'Message of User',
            type: 'user'
        },
        5:{
            messageID: 5,
            time: '',
            text: 'Message of Bot',
            type: 'bot'
        },
    },
    chatIDs: [0,3,5]
};

describe('step reducer', () => {
    it('das soll "initialState" zurückgeliefert', () => {
        expect(message(undefined, {})).toEqual(expectedInitialState);
    });
    it('test if action.type is Bot Message', () => {
        expect(message(undefined, action)).toEqual(expectedState)
    });
    it ('test if action.type is User Message' ,() => {
       expect(message(undefined, action2)).toEqual(expectedState2)
    });

    it('test  if state is not init State', () => {
        expect(message(expectedState2, action3)).toEqual(expectedState3)
    });
});
