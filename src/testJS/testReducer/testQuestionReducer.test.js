import question from '../../app/modules/chatBot/ducks/question';
import {QUESTION, QUESTION_MESSAGE,QUESTION_TYPE} from '../../app/modules/chatBot/constants';

const initialState = {
    byId: {},
    allIDs: [],
};
const d = new Date();
const testTime = {
    payload: {
        id: 10,
        time: d.getTime()
    },
    type: QUESTION
};

const testQuestion = {
    payload: {
        id: 12,
        time: d.getTime()
    },
    type: QUESTION
};
const expectedTimeTest = {
    byId: {
        10: {
            messageId: 10,
            time: d.getTime(),
            questionType: undefined,
        }
    },
    allIDs: [10],
};

const expectedSecondTimeTest = {
    allIDs: [10, 12],
    byId: {
        10: {
            messageId: 10,
            questionType: undefined,
            time: d.getTime()
        },
        12: {
            messageId: 12,
            questionType: undefined,
            time: d.getTime()
        }
    }
};

const testGetMessage  ={
    type : QUESTION_MESSAGE,
    payload:
        {message: 'some thing here'}
};

const expectedGetMessage = {
    byId: {
        text :'some thing here'
    },
    allIDs: [],
};

const actionQuestionType = {
    type: QUESTION_TYPE,
    payload : {
        questionType : 6
    }
};

const expectedQuestionType = {
    byId : {
        questionType: 6
    } ,
    allIDs: []
};

describe('Test Question Reducer', () => {
    it('Get initial State', () => {
        expect(question(undefined, {})).toEqual(initialState)
    });

    it('test question', () => {
        expect(question(undefined, testTime)).toEqual(expectedTimeTest)
    });

    it(' test second time question ', () => {
        expect(question(expectedTimeTest, testQuestion)).toEqual(expectedSecondTimeTest)
    });

    it (' test get Message' , () => {
       expect(question(undefined,testGetMessage )). toEqual(expectedGetMessage)
    });
    it ('test get QuestionTyp' ,() =>{
        expect (question (undefined, actionQuestionType)). toEqual (expectedQuestionType)
    });
});