import {equal, notEqual, deepEqual} from 'assert'
import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';


import {ANSWER_STEP, ERROR, START, SUCCESS, BOTMESSAGE, NEWMESSAGE, CHANGE_STEP} from '../../constants';
import {getResponseFromServer, postRequestAllgemein} from '../../action';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const expectError = {
    type: ERROR,
    payload: true,
};

const url = 'http://apoly.localhost/API/chatbot/post';

const expectedSuccessAfterFalseSymptomInput = [
    {type: START, payload: true},
    {
        type: BOTMESSAGE, payload: {
        botMessageID: '',
        messageBotTime: '',
        question: 'SymptomInput eingeben',
        noQuestion: false
    }
    },
    {
        type: SUCCESS,
        payload: {
            botMessageID: '',
            messageBotTime: '',
            question: 'SymptomInput eingeben',
            noQuestion: false
        }
    },
    {type: NEWMESSAGE},
    {type: CHANGE_STEP, payload: ANSWER_STEP}
];

const expectedAfterCorrectSymptomInput = [{type: START, payload: true},
    {
        type: BOTMESSAGE,
        payload: {
            botMessageID: '',
            medicineID: [Object],
            messageBotTime: '',
            questionId: 2,
            question: 'Wie alt sind Sie?',
            userId: '',
            count: 1,
            score: [Object],
            noQuestion: false
        }
    },
    {
        type: SUCCESS,
        payload: {
            botMessageID: '',
            medicineID: [Object],
            messageBotTime: '2017-09-14T10:48:47+02:00',
            questionId: 2,
            question: 'Wie alt sind Sie?',
            userId: 8369,
            count: 1,
            score: [Object],
            noQuestion: false
        }
    },
    {type: NEWMESSAGE},
    {type: CHANGE_STEP, payload: ANSWER_STEP}];

const score = {
    349: {
        score: 1,
        heuScore: 1
    },

    456: {
        score: 1,
        heuScore: 1
    },

    1395: {
        score: 1,
        heuScore: 1
    },

    7446: {
        score: 1,
        heuScore: 1
    }
};

const store = mockStore();

describe('async action', () => {
    it('test input false symptom', () => {
        store.dispatch(getResponseFromServer(url, 'data')).then(() => {
            console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedSuccessAfterFalseSymptomInput)
        })
    });

    it('test input correct symptom', () => {
        store.dispatch(getResponseFromServer(url, 'symptom')).then(() => {
            console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedAfterCorrectSymptomInput)
        })
    });

    it('test input correct Age', () => {
        store.dispatch(getResponseFromServer(url, 20, 2, score, 3000, 1)).then(() => {
            console.log(store.getActions());
            expect(store.getActions()).toEqual(expectedSuccess)
        })
    })

});





