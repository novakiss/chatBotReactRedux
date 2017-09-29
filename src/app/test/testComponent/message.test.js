import React from 'react';
import {shallow} from 'enzyme';

import {Message} from '../../components/Message';
import {getUserMessage, changeStepToQuestionStep, getResponseFromServer} from '../../action';
describe('test Message Component', () => {
    let wrapper;
    let text;
    let type;
    let medics, noQuestion, questionType, questionId;

    //Test for UserMessage
    it('should return UserMessage', () => {
        type = 'user';
        text = 'UserMessage';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId}/>);
        expect(wrapper.text()).toEqual('UserMessage');
    });
    //Test for QuestionType = 1
    it('should return question of Bot with QuestionType 1', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 1;
        text = 'Question of QuestionType 1';
        medics = {
            0: {
                name: 'efg'
            }
        };
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 1');
        expect(wrapper.text()).toBe('Question of QuestionType 1');
    });

    it('should return question of Bot with QuestionType 2', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 2;
        text = 'Question of QuestionType 2';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 2');
        expect(wrapper.text()).toBe('Question of QuestionType 2. Geben Sie bitte eine Zahl.');
    });

    it('should return question of Bot with QuestionType 3 and test State with Onclick Yes', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 3;
        text = 'Question of QuestionType 3';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 3');
        expect(wrapper.state().answered).toBe(false);
        (wrapper.find('#Yes').simulate('click', {
            preventDefault(){
            }
        }));
        expect(wrapper.state().answered).toBe(true);
    });

    it('should return question of Bot with QuestionType 3 with Onclick No', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 3;
        text = 'Question of QuestionType 3';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 3');
        expect(wrapper.state().answered).toBe(false);
        (wrapper.find('#No').simulate('click', {
            preventDefault(){
            }
        }));
        expect(wrapper.state().answered).toBe(true);
    });

    it('should return question of Bot with QuestionType 3 and questionId is 13 with Answer "Männer"', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 3;
        questionId = 13;
        text = 'Question of QuestionType 3';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 3');
        expect(wrapper.state().answered).toBe(false);
        (wrapper.find('#men').simulate('click', {
            preventDefault(){
            }
        }));
        expect(wrapper.state().answered).toBe(true);
    });
    it('should return question of Bot with QuestionType 3 and questionId is 13 with Answer "Männer"', () => {
        type = 'bot';
        noQuestion = false;
        questionType = 3;
        questionId = 13;
        text = 'Question of QuestionType 3';
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.unrendered.props.text).toBe('Question of QuestionType 3');
        expect(wrapper.state().answered).toBe(false);
        (wrapper.find('#women').simulate('click', {
            preventDefault(){
            }
        }));
        expect(wrapper.state().answered).toBe(true);
    });

    it('no Question more and no Medics found "', () => {
        noQuestion = true;
        medics = null;
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.text()).toBe('Bitte gehen Sie zum Apotheke!!!');
    });

    it('no Question more and Medics found "', () => {
        noQuestion = true;
        medics = [{
            name: 'Best Medic'
        }];
        wrapper = shallow(<Message classes={{}} text={text} type={type}
                                   medics={medics} noQuestion={noQuestion} questionType={questionType}
                                   questionId={questionId} getUserMessage={getUserMessage}
                                   changeStep={changeStepToQuestionStep}
                                   getResponse={getResponseFromServer}/>);

        expect(wrapper.text()).toBe('Keine Frage mehr. Ihr beste Medikament ist Best Medic');
    });
});
