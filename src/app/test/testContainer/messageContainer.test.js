import React from "react";
import {createMockStore} from "redux-test-utils";
import {shallowWithStore} from "enzyme-redux";

import MessageContainer from "../../containers/MessageContainer";
import {ANSWER_STEP, CHANGE_STEP, QUESTION_STEP, USER_MESSAGE} from "../../constants";

const testId = {
    id: 'testId'
};
const mess = 'test';
const stateTest = {
    chatBot: {
        state: {
            step: {
                currentStep: 'testStep'
            },
            message: {
                byID: {
                    'testId': {
                        text: 'testText',
                        type: 'testType'
                    }
                }
            },
            fetchData: {
                response: {
                    score: 'testScore',
                    userId: 'testUserId',
                    count: 'testCount',
                    question: 'testQuestion',
                    medics: 'testMedics',
                    questionId: 'testQuestionId',
                    noQuestion: 'testNoQuestion',
                    questionType: 'testQuestionType'
                }
            }
        }
    }
};

describe('test Message Container', () => {
    it('test', () => {
        const store = createMockStore(stateTest);
        const component = shallowWithStore(<MessageContainer {...testId}/>, store);
        component.props().getUserMessage(mess);
        component.props().changeStep();
        expect(store.isActionDispatched({
            type: USER_MESSAGE,
            payload: mess
        })).toBe(true);
        expect(store.isActionDispatched(
            {type: CHANGE_STEP, payload: QUESTION_STEP}
        )).toBe(true);
        expect(store.isActionDispatched(
            {type: CHANGE_STEP, payload: ANSWER_STEP}
        )).toBe(false);
    });
});

