import React from 'react';
import {createMockStore} from 'redux-test-utils';
import {shallowWithStore} from 'enzyme-redux';


import MessageContainer from '../../containers/MessageContainer'

const testId = {
  id: 'testId'
};
const stateTest = {
    chatBot: {
        state: {
            step:{
                currentStep: 'testStep'
            } ,
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

describe('test', () => {
    it('test', () => {
        const store = createMockStore(stateTest);
        const component = shallowWithStore(<MessageContainer {...testId}/>, store);
        component.props();
    });
});

