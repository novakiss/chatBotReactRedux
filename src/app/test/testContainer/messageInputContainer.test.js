import React from 'react';
import {createMockStore} from 'redux-test-utils';
import {shallowWithStore} from 'enzyme-redux';
import {shallow} from 'enzyme';

import {ANSWER_STEP,USER_MESSAGE,CHANGE_STEP,QUESTION_STEP} from '../../constants';
import MessageInputConnected, {MessageInputContainer} from '../../containers/MessageInputContainer';
import MessageInput from '../../components/MessageInput';


const stateMessageInputForUserWithQuestionTypeNot3 = {
    chatBot: {
        state: {
            step: {
                currentStep: ANSWER_STEP
            },
            fetchData: {
                response: {
                    score: 'testScore',
                    userId: 'testUserId',
                    count: 'testCount',
                    question: 'testQuestion',
                    medics: 'testMedics',
                    questionId: 'testQuestionId',
                    noQuestion: false,
                    questionType: 'testQuestionType'
                }
            }
        }
    }
};
const stateMessageInputForUserWithQuestionType3 = {
    chatBot: {
        state: {
            step: {
                currentStep: ANSWER_STEP
            },
            fetchData: {
                response: {
                    score: 'testScore',
                    userId: 'testUserId',
                    count: 'testCount',
                    question: 'testQuestion',
                    medics: 'testMedics',
                    questionId: 'testQuestionId',
                    noQuestion: false,
                    questionType: 3
                }
            }
        }
    }
};
const stateMessageInputIfNoQuestionNull = {
    chatBot: {
        state: {
            step: {
                currentStep: ANSWER_STEP
            },
            fetchData: {
                response: {
                    score: 'testScore',
                    userId: 'testUserId',
                    count: 'testCount',
                    question: 'testQuestion',
                    medics: 'testMedics',
                    questionId: 'testQuestionId',
                    noQuestion: null,
                    questionType: 3
                }
            }
        }
    }
};
const message = 'test';

describe('test MessageInputContainer', () => {
    it('test Component with QuestionType not 3', () => {
        const state = stateMessageInputForUserWithQuestionTypeNot3.chatBot.state;
        const store = createMockStore(stateMessageInputForUserWithQuestionTypeNot3);
        const component = shallowWithStore(<MessageInputConnected/>, store);
        component.props().message(message);
        component.props().changeStep();
        expect(store.isActionDispatched({
            type: USER_MESSAGE,
            payload: message
        })).toBe(true);
        expect(store.isActionDispatched({
            type: CHANGE_STEP,
            payload: QUESTION_STEP
        })).toBe(true);
        const wrapper = shallow(<MessageInputContainer currentStep={state.step.currentStep}
                                                       response={state.fetchData.response}/>);
        expect(wrapper.find(MessageInput).exists()).toBe(true);
        expect(wrapper.find(MessageInput).props().disable).toBe(false);
    });
    it('test Component with QuestionType is 3', () => {
        const state = stateMessageInputForUserWithQuestionType3.chatBot.state;
        const store = createMockStore(stateMessageInputForUserWithQuestionType3);
        const component = shallowWithStore(<MessageInputConnected/>, store);
        component.props().message(message);
        component.props().changeStep();
        expect(store.isActionDispatched({
            type: USER_MESSAGE,
            payload: message
        })).toBe(true);
        expect(store.isActionDispatched({
            type: CHANGE_STEP,
            payload: QUESTION_STEP
        })).toBe(true);
        const wrapper = shallow(<MessageInputContainer currentStep={state.step.currentStep}
                                                       response={state.fetchData.response}/>);
        expect(wrapper.find(MessageInput).exists()).toBe(true);
        expect(wrapper.find(MessageInput).props().disable).toBe(true);
    });
    it('test Component if state "Noquestion" is null', () => {
        const state = stateMessageInputIfNoQuestionNull.chatBot.state;
        const store = createMockStore(stateMessageInputIfNoQuestionNull);
        const component = shallowWithStore(<MessageInputConnected/>, store);
        component.props();
        const wrapper = shallow(<MessageInputContainer currentStep= 'test'
                                                       response={state.fetchData.response}/>);
        expect(wrapper.find(MessageInput).exists()).toBe(true);
        expect(wrapper.find(MessageInput).props().disable).toBe(true);
    });
    it('test Component if Bot answering', () => {
        const state = stateMessageInputForUserWithQuestionType3.chatBot.state;
        const store = createMockStore(stateMessageInputForUserWithQuestionType3);
        const component = shallowWithStore(<MessageInputConnected/>, store);
        component.props().message(message);
        component.props().changeStep();
        expect(store.isActionDispatched({
            type: USER_MESSAGE,
            payload: message
        })).toBe(true);
        expect(store.isActionDispatched({
            type: CHANGE_STEP,
            payload: QUESTION_STEP
        })).toBe(true);
        const wrapper = shallow(<MessageInputContainer currentStep= 'test'
                                                       response={state.fetchData.response}/>);
        expect(wrapper.find(MessageInput).exists()).toBe(true);
        expect(wrapper.find(MessageInput).props().disable).toBe(true);
    });

});