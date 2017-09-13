import message from '../../reducers/message';

import {BOTMESSAGE, USERMESSAGE} from '../../constants';

const expectedInitialState = {
    byID: {},
    chatIDs: [],
};

const action = {
    type: BOTMESSAGE,
    payload: {
        botMessageID : 1000,
        messageBotTime : 'time Bot send',
        question : 'Symptom',
        noQuestion : false,
        medicineID : [100,5000],
        questionId : 1,
        count : 2
    }
};

const expectedState = {
    byID: {
        1000: {
            messageID: 1000,
            time: 'time Bot send',
            text: 'Symptom',
            questionId: 1,
            noQuestion: false,
            medicine: [100,5000],
            count : 2,
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
        botMessageID : 5,
        messageBotTime : 'time Bot send',
        question : 'Alt',
        noQuestion : false,
        medicineID : [1342,22342,5000],
        questionId : 4,
        count : 2
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
            questionId: 4,
            noQuestion: false,
            medicine: [1342,22342,5000],
            count : 2,
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
